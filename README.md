# CHOOSE LETTER - DỰ ÁN CUỐI KÌ MÔN CÔNG NGHỆ PHẦN MỀM
Đây là một dự án cuối kì môn Công nghệ phần mềm - một sản phẩm giúp trẻ học nhận biết chữ cái. Dự án sử dụng framework Phaser để thực hiện.
![alt text](https://github.com/ndthanh20/ChooseLetter_FinalExamProject/blob/master/assets/Images/mainScreen.png)
## 1. GIỚI THIỆU
- Dự án là một web app hỗ trợ học tập cho trẻ em. Dự án mô phỏng lại một màn chơi trong ứng dụng học tập nổi tiếng dành cho trẻ em -  **Khan Academy Kids**. Màn chơi trong mục cụ thể  *Library -> ABC -> Uppercase Letters -> Find the Letter* .
- Mục tiêu của dự án là giúp trẻ nhỏ phân biệt được bảng chữ cái qua các màn chơi ngộ nghĩnh, đáng yêu.
## 2. Công nghệ sử dụng
- Phaser 3.
- Ngôn ngữ lập trình TypeScript. 
### Phaser 3
Phaser là một khung trò chơi HTML5 mã nguồn mở nhanh, miễn phí và thú vị, cung cấp kết xuất WebGL và Canvas trên các trình duyệt web trên máy tính để bàn và thiết bị di động.Các trò chơi có thể được biên dịch sang iOS, Android và các ứng dụng gốc bằng cách sử dụng các công cụ của bên thứ 3. Bạn có thể sử dụng JavaScript hoặc TypeScript để phát triển.

Phiên bản Phaser được sử dụng cho dự án là 3.23.0. 

![alt text](https://phaser.io/images/img.png)

#### Cài đặt phaser thông qua npm: 
```bash
npm install phaser
```

### TypeScript
TypeScript là một ngôn ngữ mã nguồn mở miễn phí hiện đang được phát triển và bảo trì bởi Microsoft. Nó là tập cha của JavaScript, với các bổ sung các tuỳ chọn kiểu tĩnh và lớp trên cơ sở lập trình hướng đối tượng cho ngôn ngữ này. TypeScript có thể sử dụng để phát triển ứng dụng chạy phía client, hay phía server (Node.js). TypeScript được thiết kế để phát triển ứng dụng lớn và được biến đổi - biên dịch sang JavaScript.
#### Cài đặt TypeScript thông qua npm:
```bash
npm install -g typescript
```
Để sử dụng Typescipt và Phaser với nhau, cần thiết lập file tsconfig.json như sau: 
```
{
    "compilerOptions": {
      "target": "es5"
    },
    "include": [
      "src/*", "phaser.js"
    ]
 }
 ```
 ## 3. Cách cài đặt dự án
Clone dự án bằng git: 
``` git clone https://github.com/ndthanh20/ChooseLetter_FinalExamProject.git```
Chạy script thông qua npm:
``` $npm start```
Sử dụng live-server của Visual Studio Code để chạy localhost: 
![alt text](https://i.imgur.com/LwfLgCQ.png)
Sau khi chạy live-server thì dự án sẽ chạy trên localhost như hình dưới đây: 
![alt text](https://i.imgur.com/M38Yc4i.png)

## 4. Thay đổi dữ liệu cho dự án
- Thay đổi dữ liệu bằng cách thay đổi đường dẫn trong file data.json hay data_audio.json.
## 5. Màn chơi và hướng dẫn chơi
- Màn hình bắt đầu game: 
![alt text](https://i.imgur.com/0MTWvDC.png)
- Màn chơi: 
![alt text](https://i.imgur.com/glSBbwl.png)

