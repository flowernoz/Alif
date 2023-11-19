import { FiX } from "react-icons/fi";
import { useState } from "react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  getAuth,
} from "firebase/auth";
import { auth } from "../../firebase";
import "./Register.css";
import { toast } from "react-toastify";

function Register({ setOpenRegister }) {
  const [phone, setPhone] = useState("+998");
  function login(e) {
    e.preventDefault();
    const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
      callback: (response) => {
        console.log("auth process");
      },
    });
    signInWithPhoneNumber(auth, phone, recaptcha)
      .then((e) => {
        let code = prompt("Tasdiqlash kodini kiriting");
        if (code === null) {
          alert("Kod kiritilmadi");
        } else {
          e.confirm(code).then((user) => console.log(user));
        }
        toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
          hideProgressBar: true,
        });
      })
      .catch((err) => console.log(err));
    localStorage.setItem("phone", phone).finally(() => setOpenRegister(false));
  }
  return (
    <div className="Register">
      <div onClick={() => setOpenRegister(false)} className="overlay"></div>
      <div className="modal">
        <div className="modal-header">
          <h3>Avtorizatsiya alif shop</h3>
          <FiX onClick={() => setOpenRegister(false)} />
        </div>
        <form onSubmit={login}>
          <span>Telefon raqam</span>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button>Davom etish</button>
        </form>
        <div className="recaptcha" id="recaptcha-container"></div>
        <button onClick={() => setOpenRegister(false)} className="cansel">
          Bekor qilish
        </button>
      </div>
    </div>
  );
}

export default Register;
