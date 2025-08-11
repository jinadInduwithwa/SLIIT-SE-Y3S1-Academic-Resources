import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCountryContext } from "../context/CountryContext";
import { FaHeart, FaArrowLeft, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// i18n initialization
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          backToCountries: "Back to Countries",
          loading: "Loading...",
          error: "Error",
          noData: "No Data",
          noDataMessage: "No country data found for the provided code.",
          keyInformation: "Key Information",
          capital: "Capital",
          capitalTooltip: "Main administrative city",
          population: "Population",
          populationTooltip: "Total inhabitants",
          area: "Area",
          areaTooltip: "Land area in square kilometers",
          continent: "Continent",
          continentTooltip: "Geographical continent",
          region: "Region",
          regionTooltip: "Geopolitical region",
          detailedInformation: "Detailed Information",
          subregion: "Subregion",
          languages: "Languages",
          currencies: "Currencies",
          timezones: "Timezones",
          borderingCountries: "Bordering Countries",
          callingCode: "Calling Code",
          topLevelDomain: "Top-Level Domain",
          independent: "Independent",
          unMember: "UN Member",
          coordinates: "Coordinates",
          drivingSide: "Driving Side",
          timeComparison: "Time Comparison",
          localTime: "Your Local Time",
          countryTime: "{{country}} Time",
          timeDifference: "Time Difference",
          hoursAhead: "{{hours}} hours ahead",
          hoursBehind: "{{hours}} hours behind",
          sameTime: "Same time",
          viewOnGoogleMaps: "View on Google Maps",
          mapNotAvailable: "Map not available",
          addToFavorites: "Add to favorites",
          removeFromFavorites: "Remove from favorites",
          toggleTimeComparison: "Toggle Time Comparison",
        },
      },
      si: {
        translation: {
          backToCountries: "රටවල් වෙත ආපසු",
          loading: "පූරණය වෙමින්...",
          error: "දෝෂය",
          noData: "දත්ත නැත",
          noDataMessage: "ලබා දී ඇති කේතය සඳහා රටේ දත්ත හමු නොවීය.",
          keyInformation: "ප්‍රධාන තොරතුරු",
          capital: "අගනුවර",
          capitalTooltip: "ප්‍රධාන පරිපාලන නගරය",
          population: "ජනගහනය",
          populationTooltip: "මුළු වැසියන්",
          area: "වර්ගඵලය",
          areaTooltip: "වර්ග කිලෝමීටර් ඒකකවල භූමි ප්‍රමාණය",
          continent: "මහාද්වීපය",
          continentTooltip: "භූගෝලීය මහාද්වීපය",
          region: "කලාපය",
          regionTooltip: "භූ-දේශපාලන කලාපය",
          detailedInformation: "විස්තරාත්මක තොරතුරු",
          subregion: "උපකලාපය",
          languages: "භාෂා",
          currencies: "මුදල්",
          timezones: "වේලා කලාප",
          borderingCountries: "දේශසීමා රටවල්",
          callingCode: "ඇමතුම් කේතය",
          topLevelDomain: "ඉහළ මට්ටමේ වසම",
          independent: "ස්වාධීන",
          unMember: "එක්සත් ජාතීන්ගේ සාමාජික",
          coordinates: "ඛණ්ඩාංක",
          drivingSide: "රිය පැදවීමේ පැත්ත",
          timeComparison: "වේලා සංසන්දනය",
          localTime: "ඔබේ දේශීය වේලාව",
          countryTime: "{{country}} වේලාව",
          timeDifference: "වේලා වෙනස",
          hoursAhead: "{{hours}} පැය ඉදිරියෙන්",
          hoursBehind: "{{hours}} පැය පසුපසින්",
          sameTime: "එකම වේලාව",
          viewOnGoogleMaps: "Google සිතියම් මත බලන්න",
          mapNotAvailable: "සිතියම ලබා ගත නොහැක",
          addToFavorites: "ප්‍රියතමයන්ට එක් කරන්න",
          removeFromFavorites: "ප්‍රියතමයන්ගෙන් ඉවත් කරන්න",
          toggleTimeComparison: "වේලා සංසන්දනය ටොගල් කරන්න",
        },
      },
      ta: {
        translation: {
          backToCountries: "நாடுகளுக்கு திரும்பு",
          loading: "ஏற்றுகிறது...",
          error: "பிழை",
          noData: "தரவு இல்லை",
          noDataMessage: "கொடுக்கப்பட்ட குறியீட்டிற்கு நாட்டின் தரவு கிடைக்கவில்லை.",
          keyInformation: "முக்கிய தகவல்",
          capital: "தலைநகரம்",
          capitalTooltip: "முதன்மை நிர்வாக நகரம்",
          population: "மக்கள்தொகை",
          populationTooltip: "மொத்த குடிமக்கள்",
          area: "பரப்பளவு",
          areaTooltip: "சதுர கிலோமீட்டரில் நிலப்பரப்பு",
          continent: "கண்டம்",
          continentTooltip: "புவியியல் கண்டம்",
          region: "பிராந்தியம்",
          regionTooltip: "புவி-அரசியல் பிராந்தியம்",
          detailedInformation: "விரிவான தகவல்",
          subregion: "துணைப் பிராந்தியம்",
          languages: "மொழிகள்",
          currencies: "நாணயங்கள்",
          timezones: "நேர மண்டலங்கள்",
          borderingCountries: "எல்லை நாடுகள்",
          callingCode: "அழைப்பு குறியீடு",
          topLevelDomain: "மேல் நிலை டொமைன்",
          independent: "சுதந்திரமான",
          unMember: "ஐநா உறுப்பினர்",
          coordinates: "ஆயத்தொலைவுகள்",
          drivingSide: "வாகனம் ஓட்டும் பக்கம்",
          timeComparison: "நேர ஒப்பீடு",
          localTime: "உங்கள் உள்ளூர் நேரம்",
          countryTime: "{{country}} நேரம்",
          timeDifference: "நேர வித்தியாசம்",
          hoursAhead: "{{hours}} மணி நேரம் முன்னால்",
          hoursBehind: "{{hours}} மணி நேரம் பின்னால்",
          sameTime: "அதே நேரம்",
          viewOnGoogleMaps: "Google வரைபடத்தில் பார்க்கவும்",
          mapNotAvailable: "வரைபடம் கிடைக்கவில்லை",
          addToFavorites: "பிடித்தவைகளில் சேர்",
          removeFromFavorites: "பிடித்தவைகளில் இருந்து நீக்கு",
          toggleTimeComparison: "நேர ஒப்பீட்டை மாற்று",
        },
      },
      de: {
        translation: {
          backToCountries: "Zurück zu den Ländern",
          loading: "Laden...",
          error: "Fehler",
          noData: "Keine Daten",
          noDataMessage: "Für den angegebenen Code wurden keine Länderdaten gefunden.",
          keyInformation: "Wichtige Informationen",
          capital: "Hauptstadt",
          capitalTooltip: "Hauptverwaltungsstadt",
          population: "Bevölkerung",
          populationTooltip: "Gesamtzahl der Einwohner",
          area: "Fläche",
          areaTooltip: "Landfläche in Quadratkilometern",
          continent: "Kontinent",
          continentTooltip: "Geografischer Kontinent",
          region: "Region",
          regionTooltip: "Geopolitische Region",
          detailedInformation: "Detaillierte Informationen",
          subregion: "Subregion",
          languages: "Sprachen",
          currencies: "Währungen",
          timezones: "Zeitzonen",
          borderingCountries: "Nachbarländer",
          callingCode: "Telefonvorwahl",
          topLevelDomain: "Top-Level-Domain",
          independent: "Unabhängig",
          unMember: "UN-Mitglied",
          coordinates: "Koordinaten",
          drivingSide: "Fahrseite",
          timeComparison: "Zeitvergleich",
          localTime: "Ihre Ortszeit",
          countryTime: "{{country}} Zeit",
          timeDifference: "Zeitunterschied",
          hoursAhead: "{{hours}} Stunden voraus",
          hoursBehind: "{{hours}} Stunden zurück",
          sameTime: "Gleiche Zeit",
          viewOnGoogleMaps: "Auf Google Maps ansehen",
          mapNotAvailable: "Karte nicht verfügbar",
          addToFavorites: "Zu Favoriten hinzufügen",
          removeFromFavorites: "Aus Favoriten entfernen",
          toggleTimeComparison: "Zeitvergleich umschalten",
        },
      },
      zh: {
        translation: {
          backToCountries: "返回国家列表",
          loading: "加载中...",
          error: "错误",
          noData: "无数据",
          noDataMessage: "未找到提供的代码对应的国家数据。",
          keyInformation: "关键信息",
          capital: "首都",
          capitalTooltip: "主要行政城市",
          population: "人口",
          populationTooltip: "总居民数",
          area: "面积",
          areaTooltip: "以平方公里为单位的土地面积",
          continent: "大陆",
          continentTooltip: "地理大陆",
          region: "地区",
          regionTooltip: "地缘政治地区",
          detailedInformation: "详细信息",
          subregion: "子区域",
          languages: "语言",
          currencies: "货币",
          timezones: "时区",
          borderingCountries: "邻国",
          callingCode: "电话代码",
          topLevelDomain: "顶级域名",
          independent: "独立",
          unMember: "联合国成员",
          coordinates: "坐标",
          drivingSide: "驾驶侧",
          timeComparison: "时间比较",
          localTime: "您的本地时间",
          countryTime: "{{country}} 时间",
          timeDifference: "时间差",
          hoursAhead: "领先 {{hours}} 小时",
          hoursBehind: "落后 {{hours}} 小时",
          sameTime: "相同时间",
          viewOnGoogleMaps: "在 Google 地图上查看",
          mapNotAvailable: "地图不可用",
          addToFavorites: "添加到收藏",
          removeFromFavorites: "从收藏中移除",
          toggleTimeComparison: "切换时间比较",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

const CountryDetails = () => {
  const { cca3 } = useParams();
  const { language: contextLanguage, fetchCountryByCode, loading, error } = useCountryContext();
  const { t, i18n } = useTranslation();
  const [country, setCountry] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(contextLanguage || "en");
  const [localTime, setLocalTime] = useState("");
  const [countryTime, setCountryTime] = useState("");
  const [timeDifference, setTimeDifference] = useState("");
  const [isTimeComparisonOpen, setIsTimeComparisonOpen] = useState(true);

  // Sync i18next language
  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  // Load favorite state
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoriteCountries") || "[]");
    setIsFavorite(favorites.includes(cca3));
  }, [cca3]);

  // Toggle favorite
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favoriteCountries") || "[]");
    const updatedFavorites = isFavorite
      ? favorites.filter((code) => code !== cca3)
      : [...favorites, cca3];
    localStorage.setItem("favoriteCountries", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  // Fetch country data
  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetchCountryByCode(cca3, selectedLanguage);
        if (!response || !response.data) {
          throw new Error("No country data received");
        }
        setCountry(response.data);
      } catch (err) {
        console.error("Error fetching country:", err);
        setCountry(null);
      }
    };
    getCountry();
  }, [cca3, selectedLanguage, fetchCountryByCode]);

  // Formatters
  const formatPopulation = (pop) => {
    const num = Number(pop);
    if (isNaN(num)) return "N/A";
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
    return num.toString();
  };

  const formatArea = (area) => {
    const num = Number(area);
    if (isNaN(num)) return "N/A";
    return `${num.toLocaleString()} km²`;
  };

  // Language switcher handler
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
  };

  // Timezone validation and formatting
  const isValidTimezone = (timezone) => {
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: timezone });
      return true;
    } catch (err) {
      return false;
    }
  };

  const getFormattedTime = (timezone) => {
    if (!timezone || !isValidTimezone(timezone)) {
      return "N/A";
    }
    try {
      const options = {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      return new Intl.DateTimeFormat("en-US", options).format(new Date());
    } catch (err) {
      console.error(`Error formatting time for timezone ${timezone}:`, err);
      return "N/A";
    }
  };

  const getTimeDifference = (countryTimezone) => {
    if (!countryTimezone || !isValidTimezone(countryTimezone)) {
      return "N/A";
    }
    try {
      const localDate = new Date();
      const countryDate = new Date(
        localDate.toLocaleString("en-US", { timeZone: countryTimezone })
      );
      const diffMs = countryDate - localDate;
      const diffHours = Math.round(diffMs / (1000 * 60 * 60));
      if (diffHours > 0) {
        return t("hoursAhead", { hours: diffHours });
      } else if (diffHours < 0) {
        return t("hoursBehind", { hours: Math.abs(diffHours) });
      } else {
        return t("sameTime");
      }
    } catch (err) {
      console.error(`Error calculating time difference for ${countryTimezone}:`, err);
      return "N/A";
    }
  };

  // Live clock update
  useEffect(() => {
    if (!country) return;

    const countryTimezone = country.timezones?.[0] || "UTC";
    const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const updateTimes = () => {
      setLocalTime(getFormattedTime(localTimezone));
      setCountryTime(getFormattedTime(countryTimezone));
      setTimeDifference(getTimeDifference(countryTimezone));
    };

    updateTimes(); // Initial update
    const interval = setInterval(updateTimes, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [country, t]);

  // Render loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="text-gray-700 text-lg animate-pulse">{t("loading")}</div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-xl shadow-lg max-w-md transform transition-all hover:scale-105">
          <p className="font-bold text-lg">{t("error")}</p>
          <p>{error}</p>
          <Link to="/countries-list" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 transition-colors">
            {t("backToCountries")}
          </Link>
        </div>
      </div>
    );
  }

  // Render no data state
  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-6 rounded-xl shadow-lg max-w-md transform transition-all hover:scale-105">
          <p className="font-bold text-lg">{t("noData")}</p>
          <p>{t("noDataMessage")}</p>
          <Link to="/countries-list" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 transition-colors">
            {t("backToCountries")}
          </Link>
        </div>
      </div>
    );
  }

  // Safe access to country data
  const displayName =
    selectedLanguage === "en"
      ? country.name?.common || "N/A"
      : country.translations?.[selectedLanguage]?.common || country.name?.common || "N/A";

  const languageList = Object.values(country.languages || {}).join(", ") || "N/A";
  const currencyList = Object.values(country.currencies || {})
    .map((curr) => `${curr.name} (${curr.symbol})`)
    .join(", ") || "N/A";
  const timezoneList = country.timezones?.join(", ") || "N/A";
  const borderList = country.borders?.join(", ") || "None";
  const callingCode = country.idd
    ? `${country.idd.root}${country.idd.suffixes?.[0] || ""}`
    : "N/A";
  const tldList = country.tld?.join(", ") || "N/A";
  const googleMapsUrl = country.latlng
    ? `https://www.google.com/maps/@${country.latlng[0]},${country.latlng[1]},6z`
    : "#";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <style>
        {`
          body {
            font-family: 'Noto Sans Sinhala', 'Noto Sans Tamil', 'Noto Sans SC', sans-serif;
          }
        `}
      </style>
      {/* Hero Section */}
      <div className="relative w-full h-80 sm:h-96 md:h-[32rem] rounded-xl overflow-hidden shadow-2xl transform transition-all hover:scale-[1.01]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${country.flags?.png || "https://via.placeholder.com/1200x600"})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm flex flex-col justify-center items-center text-center p-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white drop-shadow-2xl animate-fade-in">
            {displayName}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 mt-4 animate-fade-in-delayed">
            {country.name?.official || "N/A"}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-12 space-y-12">
        {/* Back Button and Language Switcher */}
        <div className="flex justify-between items-center">
          <Link
            to="/countries-list"
            className="inline-flex items-center text-indigo-600 font-semibold text-lg hover:text-indigo-800 transition-colors"
          >
            <FaArrowLeft className="mr-2 text-xl" />
            {t("backToCountries")}
          </Link>
          <div>
            <select
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="bg-white border border-gray-200 rounded-full p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            >
              <option value="en">English</option>
              <option value="si">සිංහල (Sinhala)</option>
              <option value="ta">தமிழ் (Tamil)</option>
              <option value="de">Deutsch</option>
              <option value="zh">中文 (Chinese)</option>
            </select>
          </div>
        </div>

        {/* Key Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Flag and Map (Left Side) */}
          <div className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl p-6 transform transition-all hover:scale-105">
            <img
              className="w-full h-56 object-cover rounded-lg mb-4"
              src={country.flags?.png || "https://via.placeholder.com/300x200"}
              alt={country.flags?.alt || `${country.name?.common || "Country"} flag`}
            />
            <div className="h-64 rounded-lg overflow-hidden">
              {country.latlng ? (
                <>
                  <MapContainer
                    center={[country.latlng[0], country.latlng[1]]}
                    zoom={5}
                    style={{ height: "100%", width: "100%" }}
                    className="rounded-lg"
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[country.latlng[0], country.latlng[1]]}>
                      <Popup>{displayName}</Popup>
                    </Marker>
                  </MapContainer>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-all"
                  >
                    <FaMapMarkerAlt className="mr-2" />
                    {t("viewOnGoogleMaps")}
                  </a>
                </>
              ) : (
                <div className="h-full bg-gray-100 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">{t("mapNotAvailable")}</span>
                </div>
              )}
            </div>
          </div>

          {/* Basic Info (Right Side) */}
          <div className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl p-6 sm:p-8 transform transition-all hover:scale-105">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("keyInformation")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: t("capital"), value: country.capital?.[0] || "N/A", tooltip: t("capitalTooltip") },
                { label: t("population"), value: formatPopulation(country.population), tooltip: t("populationTooltip") },
                { label: t("area"), value: formatArea(country.area), tooltip: t("areaTooltip") },
                { label: t("continent"), value: country.continents?.[0] || "N/A", tooltip: t("continentTooltip") },
                { label: t("region"), value: country.region || "N/A", tooltip: t("regionTooltip") },
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <p className="text-gray-700 text-base font-medium">
                    <strong>{item.label}:</strong> {item.value}
                  </p>
                  <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-md">
                    {item.tooltip}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Time Comparison Section */}
        <div className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl p-6 sm:p-8 transform transition-all hover:scale-105">
          <button
            onClick={() => setIsTimeComparisonOpen(!isTimeComparisonOpen)}
            className="w-full flex justify-between items-center text-3xl font-bold text-gray-900 mb-6 focus:outline-none"
          >
            {t("timeComparison")}
            {isTimeComparisonOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-300 ${
              isTimeComparisonOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div>
              <p className="text-gray-700 text-base font-medium">
                <strong>{t("localTime")}:</strong> {localTime}
              </p>
            </div>
            <div>
              <p className="text-gray-700 text-base font-medium">
                <strong>{t("countryTime", { country: displayName })}:</strong> {countryTime}
              </p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-gray-700 text-base font-medium">
                <strong>{t("timeDifference")}:</strong> {timeDifference}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl p-6 sm:p-8 transform transition-all hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("detailedInformation")}</h2>
          <div id="detailed-info" className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base">
            {[
              { label: t("subregion"), value: country.subregion || "N/A" },
              { label: t("languages"), value: languageList },
              { label: t("currencies"), value: currencyList },
              { label: t("timezones"), value: timezoneList },
              { label: t("borderingCountries"), value: borderList },
              { label: t("callingCode"), value: callingCode },
              { label: t("topLevelDomain"), value: tldList },
              { label: t("independent"), value: country.independent ? "Yes" : "No" },
              { label: t("unMember"), value: country.unMember ? "Yes" : "No" },
              { label: t("coordinates"), value: country.latlng ? `${country.latlng[0]}, ${country.latlng[1]}` : "N/A" },
              { label: t("drivingSide"), value: country.car?.side || "N/A" },
            ].map((item, index) => (
              <p key={index} className="text-gray-700 font-medium">
                <strong>{item.label}:</strong> {item.value}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Favorites Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={toggleFavorite}
          className={`p-4 rounded-full shadow-xl ${
            isFavorite ? "bg-red-600 hover:bg-red-700" : "bg-indigo-600 hover:bg-indigo-700"
          } text-white transform transition-all hover:scale-110`}
          aria-label={isFavorite ? t("removeFromFavorites") : t("addToFavorites")}
        >
          <FaHeart className="text-xl" />
        </button>
      </div>

      {/* Tailwind Animation Styles */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-delayed {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          .animate-fade-in-delayed {
            animation: fade-in-delayed 1s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default CountryDetails;