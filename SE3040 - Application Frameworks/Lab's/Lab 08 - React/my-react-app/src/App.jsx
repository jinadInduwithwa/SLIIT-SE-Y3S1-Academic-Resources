import NavBar from './NavBar';
import Greeting from './Greeting';
import Footer from './Footer';
import Card from './Card';
import Button from './Button';
import Banner from './Banner';
import Testimonial from './Testimonial';

function App() {
  return (
    <div>
      <NavBar />
      <Greeting />
      <Banner message="Get 50% Off Today Only!" backgroundColor="#ffcc00" />
      <Card
        image="https://via.placeholder.com/250"
        title="Web Design"
        description="Professional and modern website design."
      />
      <Button label="Learn More" size="large" styleType="primary" />
      <Testimonial
        quote="Amazing service, highly recommend!"
        name="John Doe"
        photo="https://via.placeholder.com/60"
      />
      <Footer />
    </div>
  );
}

export default App;
