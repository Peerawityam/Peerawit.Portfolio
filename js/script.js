document.addEventListener('DOMContentLoaded', function() {
  // 1. ค้นหาปุ่มทั้งหมดที่มี class 'btn-view'
  const viewButtons = document.querySelectorAll('.btn-view');
  
  // เช็คใน Console ว่าเจอปุ่มไหม (กด F12 ดูได้)
  console.log("Found buttons:", viewButtons.length);

  // 2. วนลูปเพิ่มคำสั่ง Click ให้ทุกปุ่ม
  viewButtons.forEach(button => {
      button.addEventListener('click', function() {
          // ดึงค่าลิงก์จาก data-url
          const url = this.getAttribute('data-url');
          
          console.log("Clicking button, URL is:", url); // เช็คว่าลิงก์มาไหม

          // ถ้ามีลิงก์ ให้เปิดหน้าต่างใหม่
          if (url) {
              window.open(url, '_blank');
          } else {
              alert("ไม่พบลิงก์ในปุ่มนี้");
          }
      });
  });
});