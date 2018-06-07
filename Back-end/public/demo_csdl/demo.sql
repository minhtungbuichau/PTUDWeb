/*


Source Server         : local
Source Server Version : 50524
Source Host           : localhost:3000
Source Database       : chlaptop

*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `categories`
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `CatID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `CatName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`CatID`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES ('1', 'Laptop gaming');
INSERT INTO `categories` VALUES ('2', 'Laptop Văn phòng');
INSERT INTO `categories` VALUES ('3', 'Laptop Doanh nhân');
INSERT INTO `categories` VALUES ('4', 'Laptop Ultrabook');


-- Table structure for `producers`
-- ----------------------------
DROP TABLE IF EXISTS `producers`;
CREATE TABLE `producers` (
  `ProduID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ProduName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ProduID`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of producers
-- ----------------------------
INSERT INTO `producers` VALUES ('1', 'Asus');
INSERT INTO `producers` VALUES ('2', 'Dell');
INSERT INTO `producers` VALUES ('3', 'Mac');
INSERT INTO `producers` VALUES ('4', 'MSI');

-- ----------------------------
-- Table structure for `orderdetails`
-- ----------------------------
DROP TABLE IF EXISTS `orderdetails`;
CREATE TABLE `orderdetails` (
  `ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `OrderID` int(11) NOT NULL,
  `ProID` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `Price` bigint(20) NOT NULL,
  `Amount` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of orderdetails
-- ----------------------------

-- ----------------------------
-- Table structure for `orders`
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `OrderID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `OrderDate` datetime NOT NULL,
  `UserID` int(11) NOT NULL,
  `Total` bigint(20) NOT NULL,
  PRIMARY KEY (`OrderID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of orders
-- ----------------------------

-- ----------------------------
-- Table structure for `products`
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `ProID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ProName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Price` int(11) NOT NULL,
  `Views` int(11) NOT NULL,
  `Sales` int(11) NOT NULL,
  `Des` text COLLATE utf8_unicode_ci NOT NULL,
  `CatID` int(11) NOT NULL,
  `ProduID` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  PRIMARY KEY (`ProID`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of products
-- ----------------------------
-- Asus
INSERT INTO `products` VALUES('1','LAPTOP ASUS A540UP-DM094T ','11900000 ','150','15',
'<p> - CPU Intel Core i3-7100U (2.4GHz, 3MB Cache)<br>
- RAM 4GB DDR4 - 2133MHz<br>
- HDD 500GB 5400rpm, 1x slot SSD (M.2/SATA)<br>
- VGA AMD Radeon R5 M420 2G DDR3 + Intel HD Graphics 620<br>
- Màn hình: 15.6" FHD (1920 x 1080)<br>
- Trọng lượng: ~ 1.9kg<br>
- Hệ điều hành: Windows 10 Home - 64bit<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','100');
INSERT INTO `products` VALUES('2','LAPTOP GL503VM-GZ219T ','32490000  ','133','23',
'<p> - CPU Intel Core i7 7700HQ (2.8GHz Up to 3.8GHz, 6MB Cache)<br>
- RAM 8GB DDR4 - 2400MHz<br>
- SSHD 1TB 5400rpm + 8GB NAND<br>
- VGA NVIDIA GeForce GTX 1060 3GB GDDR5 + Intel HD Graphics 630<br>
- Màn hình: 15.6" FHD (1920 x 1080) 120Hz<br>
- Trọng lượng: ~ 2.3kg<br>
- Hệ điều hành: Windows 10 Home - 64bit<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','100');
INSERT INTO `products` VALUES('3','LAPTOP ASUS GL503VM-GZ254T  ','39990000 ','63','7',
'<p> - CPU Intel Core i7-7700HQ<br>
- RAM 16GB<br>
- Ổ cứng: SSD 256GB + HDD 1TB<br>
- Màn hình: 15.6" FHD (1920 x 1080)<br>
- Trọng lượng: ~ 2.3kg<br>
- Hệ điều hành: Windows 10<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','100');
INSERT INTO `products` VALUES('4','LAPTOP S510UA-BQ111T ','13290000 ','57','8',
'<p> - CPU Intel Core i3-7100U (2.4GHz, 3MB Cache)<br>
- RAM 4GB DDR4 - 2133MHz<br>
- HDD 1TB 5400rpm, x1 slot SSD (M.2/SATA)<br>
- VGA Intel HD Graphics 620<br>
- Màn hình: 15.6" FHD (1920 x 1080)<br>
- Trọng lượng: ~ 1.7kg<br>
- Hệ điều hành: Windows 10 Home - 64bit<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','100');
INSERT INTO `products` VALUES('5','LAPTOP ASUS TP410UA-EC250T  ','13990000  ','77','10',
'<p> - CPU Intel Core i3-7100U (2.4GHz, 3MB Cache)<br>
- RAM 4GB DDR4 - 2133MHz<br>
- HDD 500GB 5400rpm, 1x slot SSD (M.2/SATA)<br>
- VGA Intel HD Graphics 620<br>
- Màn hình: 14.0" FHD (1920 x 1080) TouchScreen<br>
- Trọng lượng: ~ 1.8kg<br>
- Hệ điều hành: Windows 10 Home - 64bit<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','100');
INSERT INTO `products` VALUES('6','LAPTOP ASUS UX430UN-GV097T ','26990000  ','88','11',
'<p> - CPU Intel® Core™ i7-8550U (1.8GHz Up to 4.0GHz, 8MB Cache)<br>
- RAM 8GB DDR4 - 2400MHz<br>
- SSD 256GB (M.2/SATA)<br>
- VGA NVIDIA GeForce MX150 2GB GDDR5 + Intel UHD Graphics 620<br>
- Màn hình: 14.0" FHD (1920 x 1080)<br>
- Trọng lượng: 1.25kg<br>
- Hệ điều hành: Windows 10 Home - 64bit<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','100');
INSERT INTO `products` VALUES('7','LAPTOP ASUS UX510UX-CN204','15490000 ','450','51',
'<p> - CPU Intel Core i5-7200U (2.5GHz Up to 3.1GHz, 3MB Cache)<br>
- RAM 4GB DDR4 - 2133MHz<br>
- HDD 1TB 5400rpm, 1x slot SSD (M.2/SATA)<br>
- VGA NVIDIA GeForce 950M 2GB GDDR5 + Intel HD Graphics 620<br>
- Màn hình: 15.6" FHD (1920 x 1080)<br>
- Trọng lượng: ~ 2kg<br>
- Hệ điều hành: Free DOS<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','100');
INSERT INTO `products` VALUES('8','LAPTOP ASUS X405UA-BV330T  ','11790000  ','542','77',
'<p> - CPU Intel Core i3-7100U (2.4GHz, 3MB Cache)<br>
- RAM 4GB DDR4 - 2133MHz<br>
- HDD 500GB 5400rpm<br>
- VGA Intel HD Graphics 620<br>
- Màn hình: 14.0" HD (1366 x 768)<br>
- Trọng lượng: ~ 1.6kg<br>
- Hệ điều hành: Windows 10 Home - 64bit<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','100');
INSERT INTO `products` VALUES('9','LAPTOP ASUS X510UQ-BR570  ','13990000  ','344','44',
'<p> - CPU Intel Core i3-7100U (2.4GHz, 3MB Cache)<br>
- RAM 4GB DDR4 - 2133MHz<br>
- HDD 500GB 5400rpm, 1x slot SSD (M.2/SATA)<br>
- VGA AMD Radeon R5 M420 2G DDR3 + Intel HD Graphics 620<br>
- Màn hình: 15.6" FHD (1920 x 1080)<br>
- Trọng lượng: ~ 1.9kg<br>
- Hệ điều hành: Windows 10 Home - 64bit<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','100');
INSERT INTO `products` VALUES('10','LAPTOP ASUS X541UA-GO1384  ','10390000','233','15',
'<p> - CPU Intel Core i5-7200U (2.5GHz Up to 3.1GHz, 3MB Cache)<br>
- RAM 4GB DDR4 - 2133MHz<br>
- HDD 1TB 5400rpm<br>
- VGA Intel HD Graphics 620<br>
- Màn hình: 15.6" HD (1366 x 768)<br>
- Trọng lượng: ~ 2kg<br>
- Hệ điều hành: Free DOS<br>
- Xuất xứ: Đài Loan<br>
- Nhà sản xuất: Asus<br></p>','2','1','100');

-- Dell
INSERT INTO `products` VALUES('11','LAPTOP DELL 5437-D8MMY2','15900000 ','417','22',
'<p> - CPU: Intel® Core™ i5-4200U Processor (3M Cache, up to 2.60 GHz)<br>
- Ram: 4GB<br>
- Ổ cứng: 500 GB 5400 rpm<br>
- VGA: NVIDIA GeForce GT 740M 2GB + Intel HD Graphics 4400<br>
- Màn hình: 14" (1366 x 768)<br>
- Trọng lượng: 1.95 Kg<br>
- Hệ điều hành có sẵn: Win 8 64bit<br>
- Xuất xứ: Trung Quốc<br>
- Nhà sản xuất: DELL<br></p>','2','2','100');
INSERT INTO `products` VALUES('12','LAPTOP INSPIRON 13 5378-26W972','16990000 ','344','26',
'<p> - CPU Intel Core i5-7200U (2.5GHz - up to 3.1Ghz. 3MB Cache)<br>
- RAM 4GB DDR4 2133MHz<br>
- HDD 500GB SATA 5400rpm<br>
- VGA AMD Radeon R5 M430 2GB + Intel HD Graphics 620<br>
- Màn hình: 13.3" Full HD (1920x1080)<br>
- Trọng lượng: 1.8kg<br>
- Hệ điều hành: Win 10 Home<br>
- Xuất xứ: Trung Quốc<br>
- Nhà sản xuất: DELL<br></p>','2','2','100');

INSERT INTO `products` VALUES('13','LAPTOP DELL INSPIRON 14 3467-M20NR21','11490000 ','344','23',
'<p> - CPU Intel Core i3-7100U (2.4GHz. 3MB Cache)<br>
- RAM 4GB DDR4 2133MHz<br>
- HDD 1 TB SATA 5400rpm<br>
- VGA Intel HD Graphics 620<br>
- Màn hình: 14" HD (1366 x 768)<br>
- Trọng lượng: 1,81kg<br>
- Hệ điều hành: Win 10<br>
- Xuất xứ: Trung Quốc<br>
- Nhà sản xuất: DELL<br></p>','2','2','100');

INSERT INTO `products` VALUES('14','LAPTOP DELL INSPIRON 14 5468-K5CDP1','13690000 ','334','22',
'<p> - CPU Intel Core i5-7200U (2.5GHz - up to 3.1Ghz. 3MB Cache)<br>
- RAM 4GB DDR4 2133MHz<br>
- HDD 500GB SATA 5400rpm<br>
- VGA AMD Radeon R7 M440 2GB + Intel HD Graphics 620<br>
- Màn hình: 14" HD (1366 x 768)<br>
- Trọng lượng: 2.06kg<br>
- Hệ điều hành: Win 10 Home<br>
- Xuất xứ: Trung Quốc<br>
- Nhà sản xuất: DELL<br></p>','2','2','100');

INSERT INTO `products` VALUES('15','LAPTOP DELL INSPIRON 14 7460-N4I5259W','16490000','117','15',
'<p> - CPU Intel Core i5-7200U (2.5GHz - up to 3.1Ghz. 3MB Cache)<br>
- RAM 4GB DDR4 2400MHz<br>
- HDD 500GB SATA 5400rpm + SSD 128GB M.2 SATA<br>
- VGA NVIDIA GeForce 940MX 2GB GDDR5 + Intel HD Graphics 620<br>
- Màn hình: 14" LED Full HD (1920x1080)<br>
- Trọng lượng: 1.6kg<br>
- Hệ điều hành: Win 10<br>
- Xuất xứ: Trung Quốc<br>
- Nhà sản xuất: DELL<br></p>','2','2','100');

INSERT INTO `products` VALUES('16','LAPTOP DELL VOSTRO 3468 (F3468-70088614)','12790000','788','44',
'<p> - CPU Intel Core i5-7200U (2.5GHz - up to 3.1Ghz. 3MB Cache)<br>
- RAM 4GB DDR4 2400MHz<br>
- HDD 1TB SATA 5400rpm<br>
- VGA Intel HD Graphics 620<br>
- Màn hình: 14" HD (1366 x 768)<br>
- Trọng lượng: 1.94kg<br>
- Hệ điều hành: Free DOS<br>
- Xuất xứ: Trung Quốc<br>
- Nhà sản xuất: DELL<br></p>','2','2','100');
INSERT INTO `products` VALUES('17','LAPTOP DELL VOSTRO 3568-VTI35037','11090000 ','177','25',
'<p> - CPU Intel Core i3-7100U (2.4GHz. 3MB Cache)<br>
- RAM 4GB DDR4 2400MHz<br>
- HDD 1 TB SATA 5400rpm<br>
- VGA Intel HD Graphics 520<br>
- Màn hình: 15.6" HD (1366 x 768)<br>
- Trọng lượng: 2.1kg<br>
- Hệ điều hành: Free DOS<br>
- Xuất xứ: Trung Quốc<br>
- Nhà sản xuất: DELL<br></p>','2','2','100');
INSERT INTO `products` VALUES('18','LAPTOP DELL VOSTRO 5468-VTI35008','12790000','66','7',
'<p> - CPU Intel Core i3-7100U (2.4GHz. 3MB Cache)<br>
- RAM 4GB DDR4 2400MHz<br>
- HDD 500GB SATA 5400rpm<br>
- VGA Intel HD Graphics 620<br>
- Màn hình: 14" HD (1366x768)<br>
- Trọng lượng: 1.6kg<br>
- Hệ điều hành: Free Dos<br>
- Xuất xứ: Trung Quốc<br>
- Nhà sản xuất: DELL<br></p>','2','2','100');

INSERT INTO `products` VALUES('19','LAPTOP DELL XPS13 9360-99H103','46090000','533','10',
'<p> - CPU: Intel Core i7-7560U <br>
- Ram: 16GB DDR4<br>
- Ổ cứng: 512Gb SSD<br>
- Màn hình: 13.3” QHD+ (3200 x 1800) InfinityEdge touch <br>
- Trọng lượng: 1.26kg<br>
- Hệ điều hành có sẵn: Windows 10 Home Single Language 64-BIT + Office Personal 365<br>
- Xuất xứ: Trung Quốc<br>
- Nhà sản xuất: DELL<br></p>','2','2','100');

INSERT INTO `products` VALUES('20','LAPTOP DELL XPS13 9365-K7DWW2','54490000','655','23',
'<p> - CPU: Core i7 7Y75<br>
- Ram: 16Gb<br>
- Ổ cứng: 512Gb SSD<br>
- Màn hình: 13.3 QHD TouchScreen<br>
- Trọng lượng: 1.3kg<br>
- Hệ điều hành có sẵn: Windows 10 + Office 365<br>
- Xuất xứ: Trung Quốc<br>
- Nhà sản xuất: DELL<br></p>','2','2','100');

-- mac

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `f_ID` int(11) NOT NULL AUTO_INCREMENT,
  `f_Username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `f_Password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `f_Name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `f_Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `f_DOB` date NOT NULL,
  `f_Permission` int(11) NOT NULL,
  PRIMARY KEY (`f_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
