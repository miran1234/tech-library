import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        username: name,
        email: email,
        password: password,
        createdAt: new Date()
      });
      alert("تم الحفظ في Firebase بنجاح يا ريم!");
    } catch (error) {
      alert("خطأ: " + error.message);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>تسجيل حساب جديد</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="الاسم" onChange={(e) => setName(e.target.value)} required /><br/><br/>
        <input type="email" placeholder="الإيميل" onChange={(e) => setEmail(e.target.value)} required /><br/><br/>
        <input type="password" placeholder="كلمة السر" onChange={(e) => setPassword(e.target.value)} required /><br/><br/>
        <button type="submit">إرسال البيانات لفايربيس</button>
      </form>
    </div>
  );
}

export default Register;
