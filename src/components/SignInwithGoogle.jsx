import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./Firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import logo from "../assets/google.png";


const SignInwithGoogle = () => {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName?.split(" ")[0] || "",
          photo: user.photoURL,
          lastName: user.displayName?.split(" ")[1] || "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/profile";
      }
    });
  }

  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src={logo} width={"60%"} />
      </div>
    </div>
  );
};

export default SignInwithGoogle;
