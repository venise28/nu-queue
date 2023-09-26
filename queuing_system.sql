-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2023 at 03:15 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `queuing_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `queue`
--

CREATE TABLE `queue` (
  `id` int(11) NOT NULL,
  `student_id` varchar(10) NOT NULL,
  `queue_number` varchar(10) NOT NULL,
  `office` varchar(20) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `queue`
--

INSERT INTO `queue` (`id`, `student_id`, `queue_number`, `office`, `timestamp`) VALUES
(1, '2020-123', 'AD001', 'ADMISSION', '2023-09-21 07:35:47'),
(2, '2020-123', 'R001', 'REGISTRAR', '2023-09-23 03:19:13'),
(3, '2020-123', 'AC001', 'ACCOUNTING', '2023-09-23 06:14:32'),
(4, '2020-123', 'AC002', 'ACCOUNTING', '2023-09-23 06:14:40'),
(5, '2020-123', 'AD002', 'ADMISSION', '2023-09-24 22:36:25'),
(6, '2020-123', 'AS001', 'ASSETS', '2023-09-24 22:37:35'),
(7, '2020-123', 'AC003', 'ACCOUNTING', '2023-09-25 06:49:46');

-- --------------------------------------------------------

--
-- Table structure for table `studentid_list`
--

CREATE TABLE `studentid_list` (
  `id` int(11) NOT NULL,
  `student_id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentid_list`
--

INSERT INTO `studentid_list` (`id`, `student_id`) VALUES
(1, '2020-123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `queue`
--
ALTER TABLE `queue`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `studentid_list`
--
ALTER TABLE `studentid_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `queue`
--
ALTER TABLE `queue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `studentid_list`
--
ALTER TABLE `studentid_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
