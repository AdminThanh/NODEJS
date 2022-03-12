-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th2 25, 2022 lúc 02:27 AM
-- Phiên bản máy phục vụ: 10.4.19-MariaDB
-- Phiên bản PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `asmnodejs`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`category_id`, `category_name`) VALUES
(1, 'Ghế làm việc'),
(2, 'Ghế công thái học'),
(3, 'Ghế thư giản'),
(4, 'Ghế bàn ăn');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `thumbnail` varchar(255) CHARACTER SET utf8 NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `price` float NOT NULL,
  `active` int(11) NOT NULL,
  `view` int(11) NOT NULL,
  `hot` float NOT NULL,
  `import_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`product_id`, `category_id`, `product_name`, `thumbnail`, `description`, `price`, `active`, `view`, `hot`, `import_date`) VALUES
(1, 1, 'Ghế xoay văn phòng lưng lưới màu đen HOM1087T-02a', 'https://homeoffice.com.vn/images/thumbnails/640/640/detailed/28/ghe-van-phong-HOM1087T-02.jpg?t=1638898410', 'Ghế xoay văn phòng lưng lưới M1087T-02 mẫu Ghế được thiết kế và sản xuất theo Design Thinking đặt người ngồi làm trọng tâm (Human-Centered Design) và những thấu cảm với người ngồi sản xuất tại Việt Nam và được phân phối bởi HomeOffice, khả năng hỗ trợ cột', 2100000, 1, 105, 1, '2022-01-26 08:10:06'),
(2, 1, 'Ghế văn phòng chân xoay lưng lưới HOM1089-01', 'https://homeoffice.com.vn/images/watermarked/1/detailed/46/ghe-van-phong-chan-xoay-hom1089-01a.jpg?t=1641524804', 'Ghế văn phòng chân xoay lưng lưới HOM1089-01 là mẫu ghế lưng lưới thấp tay liền kết nối với hệ nệm chắc chắn, lưng và nệm ghế nhiều màu đẹp mắt. Bộ điều khiển có các tính năng: nâng hạ chiều cao, chốt ngả lưng ở một vị trí, điều chỉnh trọng lượng theo ngư', 1600000, 1, 134, 1, '2022-01-03 08:10:06'),
(3, 2, 'Ghế Ergonomic công thái học cao cấp CTH-07', 'https://homeoffice.com.vn/images/thumbnails/640/640/detailed/45/Ghe-ergonomic-cong-thai-hoc-ERC07-01.jpg?t=1640226418', 'Ghế Ergonomic công thái học cao cấp CTH-07 là thuộc dòng ghế Ergonomic công thái học cao cấp với các tính năng vượt trội hỗ trợ người dùng tối đa giúp bạn có được tư thế làm việc thoải mái nhất, nâng cao hiệu suất công việc và đặc biệt bảo vệ sức khoẻ ngư', 13000000, 1, 26, 0, '2022-01-15 08:10:06'),
(4, 2, 'Ghế văn phòng cao cấp nhập khẩu Hàn Quốc MSA-100 GVPMT001', 'https://homeoffice.com.vn/images/thumbnails/300/300/detailed/36/ghe-cong-thai-hoc-187sjN-01.jpg?t=1635245690', 'Ghế văn phòng cao cấp nhập khẩu Hàn Quốc MSA-100 với thiết kế tựa lưng hai tầng hỗ trợ lưng và vùng thắt lưng eo ôm sát vào trục cột sống lưng. Đây là thiết kế nổi bật, hiện đại của ghế, chú trọng tới việc bảo vệ sức khỏe người sử dụng. Trục tựa lưng thép', 5000000, 1, 4, 0, '2022-01-15 08:10:06'),
(5, 3, 'Ghế đọc sách, thư giãn khung màu vàng đồng GTG68027', 'https://homeoffice.com.vn/images/thumbnails/640/640/detailed/20/ghe-thu-gian-mau-vang-dong-1.jpg?t=1638824599', 'Ghế đọc sách, thư giãn khung màu vàng đồng GTG68027 thuộc dòng sản phẩm ghế đọc sách, thư giãn của Homeoffice. Khung sắt được sơn tĩnh điện màu vàng đồng chắc chắn cùng với thiết kế đẹp mắt, độc đáo ghế GTG68027 sẽ là điểm nhấn giúp căn phòng của bạn thêm', 2000000, 1, 9, 1, '2022-01-15 08:10:06'),
(6, 3, 'GBCJE-04 - Ghế bàn cao lưng nhựa bành to chân gỗ màu (trắng - đỏ - đen)', 'https://homeoffice.com.vn/images/thumbnails/640/640/detailed/9/ghe-nhua-banh-to-8.jpg?t=1638878039', 'Một dòng sản phẩm của ghế Eames, luôn chiếm trọn tin tưởng của khách hàng với thiết kế giản đơn, hiện đại và hoàn hảo. Phù hợp với nhiều không gian nội ngoại thất khác nhau như ghế làm việc bàn cao, quán coffe, trà sữa..v...', 1200000, 1, 4, 0, '2022-01-15 08:10:06'),
(7, 4, 'Ghế Ăn - Cafe Kane chân sắt nệm vải Simili AK131', 'https://homeoffice.com.vn/images/watermarked/1/detailed/33/ghe-kane131-01.jpg?t=1627978640', 'Ghế Ăn - Cafe Kane chân sắt nệm vải Simili AK131thiết kế ôm lưng rất đẹp mắt với 3 màu sắc lựa chọn, mẫu ghế Kane rất phù hợp cho không gian phòng ăn hoặc Cafe trong nhà, dùng để làm việc hoặc trang điểm cũng  được. Khung chân sắt sơn tĩnh điện chắc chắn ', 1300000, 1, 137, 1, '2022-01-17 08:10:06'),
(8, 4, 'Ghế cafe, ghế ăn nệm màu nâu khung sắt GSK003', 'https://homeoffice.com.vn/images/watermarked/1/detailed/25/gsk003-ghe-cafe-ghe-an-3.jpg?t=1627978576', 'Ghế cafe, ghế ăn nệm màu nâu khung sắt sơn tĩnh điện GSK002 với khung sắt được hoàn thiện từ sắt mang đến sự chắn chắc kết hợp cùng nệm ghế ngồi êm ái. Sản phẩm phù hợp với bàn ghế cafe, bàn ăn hoặc ghế bàn làm việc đều được ', 500000, 1, 19, 0, '2022-01-26 08:10:06');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(200) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `sothich` varchar(2000) CHARACTER SET utf8mb4 DEFAULT NULL,
  `gioiTinh` varchar(100) DEFAULT NULL,
  `ngaySinh` date NOT NULL,
  `role` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `fullName`, `userName`, `password`, `email`, `sothich`, `gioiTinh`, `ngaySinh`, `role`) VALUES
(1, 'Nguyễn Đăng Thành', 'dangthanh', '$2b$10$pqh9QqF84fZj6YxHWsYQ..ERKDj8OvlvdbqsuAlUcNbZ.rG4EQR.S', 'thanh@gmail.com', 'COde', 'Nam', '2022-02-09', 1),
(2, 'Nguyễn Đăng Thành', 'thanh1010dang@gmail.com', '$2b$10$6PDKsHzWobabNfKyTNdtwu9on2mtlwLm4MUZrgfjBWCVIervmGDSC', 'thanh1010dang@gmail.com', 'code', NULL, '2022-02-26', 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
