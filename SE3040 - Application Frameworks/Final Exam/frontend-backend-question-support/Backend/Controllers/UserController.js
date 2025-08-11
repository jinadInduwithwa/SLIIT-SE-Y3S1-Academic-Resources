import User from "../Model/UserModel.js"

//---------------- get all users function --------------------
const getAllUsers = async (req, res, next) => {
    // get all users
    try{
        const users = await User.find();

        // if not users find
        if(!users){
            return res.status(404).json({message:"users not found"});
        }

        return res.status(200).json({users});

    }catch(error){
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    } 
};

//---------------- data insertion --------------------
const addUser = async (req, res, next) => {

    const {username, email, phone, bio, age, status, preferences  } = req.body; // Extracts user data from the request body using object destructuring

    try {
        const newUser = new User({username, email, phone, bio, age, status, preferences}); // Create a new User instance with the provided data
        const savedUser = await newUser.save(); // Save it to the MongoDB database

         // if not insert sucess
        if(!savedUser){
            return res.status(404).json({message:"unable to add user"});
        }
        return res.status(201).json({savedUser});

    } catch (error) {
        console.error("Error adding user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }

   

}

//---------------- get data by id ---------------
const getById = async (req, res, next) => {
    const id = req.params.id; // Extracts the id from the request URL.

    try {
        const user = await User.findById(id); //  look for a user by their _id.

        //if user not found
        if(!user){
            return res.status(404).json({message:"user not found"})
        }

        return res.status(200).json({user});

    } catch (error) {
        console.error("Error in get data by id:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

//---------------- update data by id ---------------
const updatebyId = async (req, res, next) => {
    const id = req.params.id;
    const {username, email, phone, bio, age, status, preferences} = req.body // Destructure updated data

    try {
        const updatedUser  = await User.findByIdAndUpdate(
            id,
            {username:username, email:email, phone:phone, bio:bio, age:age, status:status, preferences:preferences},
            { new: true }  //  ensures it returns the updated user, not the old one.
        );

        // if not update
        if(!updatedUser){
            return res.status(404).json({message:"user not found"});
        }

        return res.status(200).json({updatedUser})
        
    } catch (error) {
        console.log("Error in update by id",error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

//---------------- delete data by id ---------------
const deleteById = async (req,res, next) => {
    const id = req.params.id;

    try{
        const deletedUser = await User.findByIdAndDelete(id);

        // if user not found
        if (!deletedUser) {
            return res.status(404).json({message:"user not found"})
        }

        return res.status(200).json({message:"user deleted success"});
    }catch(error){
        console.log("Error in delete user by id",error);
        return res.status(500).json({ message: "Internal server error" });
    }

}

// -------------- search ---------------------
const search = async (req, res, next) => {
    try {
        const { query = "" } = req.query;

        // search condition
        const searchCondition = {
            //Regex stands for Regular Expression. It’s a pattern used to search, match, or replace strings (text) based on specific rules.
            $or: [ //match either condition
                {username: {$regex: query, $options: "i"}},  // 'i' = case-insensitive
                {email: {$regex: query, $options: "i"}},  // 'i' = case-insensitive
            ]
        }

        const users = await User.find(searchCondition).sort({createdAt: -1}); // sorts results by most recent users.

        if (!users || users.length === 0) {
            return res.status(404).json({message:"not found"});
        }
        return res.status(200).json({users});
        
    } catch (error) {
        console.error("Error in search:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// -------------- search & filter ---------------------
const searchAndFilter = async (req, res, next) => {
    try {
        const {query = "", status } = req.query;

        // search condition
        const searchCondition = {
            $or: [ // searching across multiple fields
                { username: { $regex:query, $options:"i" } },
                { email: { $regex:query, $options:"i" } }
            ]
        };

        // Apply filters if provided
        if (status) {
            searchCondition.status = status; // Only add if status exists
        }

        const users = await User.find(searchCondition).sort({createdAt: -1}); // shows the most recent users first (createdAt: -1).

         if (!users || users.length === 0) {
            return res.status(404).json({message:"not found"});
        }

        return res.status(200).json({ users });


    } catch (error) {
        console.error("Error in search and filter:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default {
  getAllUsers,
  addUser,
  getById,
  updatebyId,
  deleteById,
  search,
  searchAndFilter,
};