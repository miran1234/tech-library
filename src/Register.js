import React, { useState } from 'react';
import { db, ref, set } from './firebase';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setStatus('جاري الإرسال...');
    try {
      const userId = Date.now();
      await set(ref(db, 'users/' + userId), {
        username: name,
        email: email
      });
      setStatus('تم الحفظ بنجاح في السيرفر البديل!');
    } catch (error) {
      setStatus('خطأ: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>تسجيل مستخدم جديد</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="الاسم" onChange={(e) => setName(e.target.value)} required /><br/><br/>
        <input type="email" placeholder="الإيميل" onChange={(e) => setEmail(e.target.value)} required /><br/><br/>
        <button type="submit">إرسال البيانات</button>
      </form>
      <p>الحالة: {status}</p>
    </div>
  );
}

export default Register;
