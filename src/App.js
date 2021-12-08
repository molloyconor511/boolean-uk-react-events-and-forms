import BookingSection from "./sections/Booking";
import ProductSection from "./sections/Product";
import SignUpSection from "./sections/SignUp";

const signUpSection = (sign) => {
  console.log(sign)
}

function App() {
  return (
    <div className="main-layout">
      <SignUpSection onSign={signUpSection}/>
      <ProductSection />
      <BookingSection />
    </div>
  );
}

export default App;
