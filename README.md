# Temp Mail API (Mock Version)

✅ API Mock لتوليد بريد مؤقت واستعراض الرسائل عبر Express

### التشغيل:
```
npm install
npm start
```

### الواجهات المتاحة:
- GET `/generate-email` → إنشاء بريد وهمي جديد
- GET `/inbox/:email` → عرض الرسائل الخاصة بالبريد
- GET `/message/:email/:id` → عرض رسالة واحدة
- POST `/send` → إرسال رسالة وهمية للبريد

