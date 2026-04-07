import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setStatus('جاري الإرسال...');
    try {
      // إرسال البيانات
      await addDoc(collection(db, "users"), {
        username: name,
        email: email,
        password: password,
        createdAt: new Date()
      });
      setStatus('تم الحفظ بنجاح يا ريم! افحصي قاعدة البيانات الآن.');
      alert("نجح الاتصال!");
    } catch (error) {
      console.error(error);
      setStatus('فشل الاتصال: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>نظام تسجيل ميران تيك</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="الاسم" onChange={(e) => setName(e.target.value)} required style={{padding: '10px', margin: '5px'}} /><br/>
        <input type="email" placeholder="الإيميل" onChange={(e) => setEmail(e.target.value)} required style={{padding: '10px', margin: '5px'}} /><br/>
        <input type="password" placeholder="كلمة السر" onChange={(e) => setPassword(e.target.value)} required style={{padding: '10px', margin: '5px'}} /><br/>
        <button type="submit" style={{padding: '10px 20px', background: 'blue', color: 'white'}}>إرسال لفايربيس</button>
      </form>
      <p><strong>الحالة:</strong> {status}</p>
    </div>
  );
}

export default Register;
