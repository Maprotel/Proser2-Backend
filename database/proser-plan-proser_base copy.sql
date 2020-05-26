-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 25, 2020 at 10:34 AM
-- Server version: 10.4.12-MariaDB-1:10.4.12+maria~bionic-log
-- PHP Version: 7.2.24-0ubuntu0.18.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proser-plan-proser_base`
--
CREATE DATABASE IF NOT EXISTS `proser-plan-proser_base` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `proser-plan-proser_base`;

-- --------------------------------------------------------

--
-- Table structure for table `InvActivity`
--

DROP TABLE IF EXISTS `InvActivity`;
CREATE TABLE `InvActivity` (
  `inv_activity_id` int(11) NOT NULL,
  `inv_activity_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_activity_type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `InvAssignation`
--

DROP TABLE IF EXISTS `InvAssignation`;
CREATE TABLE `InvAssignation` (
  `Inv_assignation_id` int(11) NOT NULL,
  `inv_assignation_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `__TIME__` int(1) DEFAULT NULL,
  `inv_assignation_datetime_start` datetime DEFAULT NULL,
  `inv_assignation_datetime_end` datetime DEFAULT NULL,
  `__ASSIGNATION__` int(1) DEFAULT NULL,
  `inv_assignation_agent_id` int(11) DEFAULT NULL,
  `inv_assignation_calendar_id` int(11) DEFAULT NULL,
  `inv_assignation_supervisor_id` int(11) DEFAULT NULL,
  `inv_assignation_team_id` int(11) DEFAULT NULL,
  `in_assignation_activity_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `InvCalendar`
--

DROP TABLE IF EXISTS `InvCalendar`;
CREATE TABLE `InvCalendar` (
  `inv_calendar_id` int(10) NOT NULL,
  `inv_calendar_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_calendar_type` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_calendar_status` varchar(11) COLLATE utf8_spanish_ci DEFAULT 'A',
  `inv_calendar_chk` int(100) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `InvCalendar`
--

INSERT INTO `InvCalendar` (`inv_calendar_id`, `inv_calendar_name`, `inv_calendar_type`, `inv_calendar_status`, `inv_calendar_chk`) VALUES
(1, 'Venezuela', '', 'A', 1);

-- --------------------------------------------------------

--
-- Table structure for table `InvCalendarDay`
--

DROP TABLE IF EXISTS `InvCalendarDay`;
CREATE TABLE `InvCalendarDay` (
  `inv_calendarday_id` int(11) NOT NULL,
  `inv_calendarday_calendarid` int(11) DEFAULT NULL,
  `inv_calendarday_date` date NOT NULL,
  `inv_calendarday_ref` varchar(50) GENERATED ALWAYS AS (concat(`inv_calendarday_calendarid`,'-',`inv_calendarday_date`)) STORED,
  `__CLASSIFICATION__` int(1) DEFAULT NULL,
  `inv_calendarday_weekday` int(10) GENERATED ALWAYS AS (weekday(`inv_calendarday_date`) + 1) STORED,
  `inv_calendarday_month` int(10) GENERATED ALWAYS AS (month(`inv_calendarday_date`) + 0) STORED,
  `inv_calendarday_week` int(10) GENERATED ALWAYS AS (week(`inv_calendarday_date`,3) + 0) STORED,
  `inv_calendarday_monthday` int(10) GENERATED ALWAYS AS (dayofmonth(`inv_calendarday_date`) + 0) STORED,
  `inv_calendarday_monthday_id` varchar(5) CHARACTER SET utf8 GENERATED ALWAYS AS (concat(lpad(`inv_calendarday_month`,2,0),'-',lpad(`inv_calendarday_monthday`,2,0))) STORED,
  `inv_calendarday_year` varchar(100) GENERATED ALWAYS AS (year(`inv_calendarday_date`)) STORED,
  `inv_calendarday_yearmonth` varchar(100) GENERATED ALWAYS AS (concat(year(`inv_calendarday_date`),'-',lpad(month(`inv_calendarday_date`),2,0))) STORED,
  `__HOURS__` int(1) DEFAULT NULL,
  `inv_calendarday_start` time DEFAULT NULL,
  `inv_calendarday_end` time DEFAULT NULL,
  `inv_calendarday_starttime` varchar(50) GENERATED ALWAYS AS (concat(`inv_calendarday_date`,' ',`inv_calendarday_start`)) STORED,
  `inv_calendarday_endtime` varchar(50) GENERATED ALWAYS AS (if(`inv_calendarday_start` <= `inv_calendarday_end`,concat(`inv_calendarday_date`,' ',`inv_calendarday_end`),concat(`inv_calendarday_date` + interval 1 day,' ',`inv_calendarday_end`))) STORED,
  `inv_calendarday_breaktimeminutes` int(11) DEFAULT NULL,
  `inv_calendarday_workingminutes` int(10) GENERATED ALWAYS AS (timestampdiff(MINUTE,`inv_calendarday_starttime`,`inv_calendarday_endtime`) - `inv_calendarday_breaktimeminutes`) STORED,
  `__TYPIFICATION__` int(1) DEFAULT NULL,
  `inv_calendarday_hollyday_name` varchar(100) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'NULL',
  `inv_calendarday_workingday` int(10) GENERATED ALWAYS AS (if(octet_length(`inv_calendarday_hollyday_name`) > 0,1,0)) STORED,
  `inv_calendarday_type` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `__JSON__` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_calendarday_date_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `InvCalendarDay`
--

INSERT INTO `InvCalendarDay` (`inv_calendarday_id`, `inv_calendarday_calendarid`, `inv_calendarday_date`, `__CLASSIFICATION__`, `__HOURS__`, `inv_calendarday_start`, `inv_calendarday_end`, `inv_calendarday_breaktimeminutes`, `__TYPIFICATION__`, `inv_calendarday_hollyday_name`, `inv_calendarday_type`, `__JSON__`, `inv_calendarday_date_json`) VALUES
(1, 1, '2020-05-24', NULL, NULL, '10:00:00', '12:00:00', 60, NULL, 'NULL', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `InvCalendarFixedHollyday`
--

DROP TABLE IF EXISTS `InvCalendarFixedHollyday`;
CREATE TABLE `InvCalendarFixedHollyday` (
  `inv_calendarfixedhollyday_id` varchar(5) COLLATE utf8_spanish_ci NOT NULL,
  `inv_calendarfixedhollyday_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `InvCalendarFixedHollyday`
--

INSERT INTO `InvCalendarFixedHollyday` (`inv_calendarfixedhollyday_id`, `inv_calendarfixedhollyday_name`) VALUES
('01-01', 'Año nuevo'),
('04-19', 'Declaración de la Independencia'),
('05-01', 'Día del Trabajo'),
('06-24', 'Batalla de Carabobo'),
('07-05', 'Dí­a de la Independencia'),
('07-24', 'Día de Simón Bolívar'),
('10-10', 'Día de la Resistencia Indígena'),
('12-24', 'Víspera de Navidad'),
('12-25', 'Navidad'),
('12-31', 'Fiesta de Fin de Año');

-- --------------------------------------------------------

--
-- Table structure for table `InvCalendarVariableHollyday`
--

DROP TABLE IF EXISTS `InvCalendarVariableHollyday`;
CREATE TABLE `InvCalendarVariableHollyday` (
  `inv_calendarvariableholliday_id` date NOT NULL,
  `inv_calendarvariableholliday_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `InvCalendarVariableHollyday`
--

INSERT INTO `InvCalendarVariableHollyday` (`inv_calendarvariableholliday_id`, `inv_calendarvariableholliday_name`) VALUES
('2019-03-04', 'Carnaval'),
('2019-03-05', 'Carnaval'),
('2019-04-18', 'Jueves Santo'),
('2019-04-19', 'Viernes Santo');

-- --------------------------------------------------------

--
-- Table structure for table `InvTeam`
--

DROP TABLE IF EXISTS `InvTeam`;
CREATE TABLE `InvTeam` (
  `inv_team_id` int(11) NOT NULL,
  `inv_team_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `InvActivity`
--
ALTER TABLE `InvActivity`
  ADD PRIMARY KEY (`inv_activity_id`);

--
-- Indexes for table `InvAssignation`
--
ALTER TABLE `InvAssignation`
  ADD PRIMARY KEY (`Inv_assignation_id`);

--
-- Indexes for table `InvCalendar`
--
ALTER TABLE `InvCalendar`
  ADD PRIMARY KEY (`inv_calendar_id`);

--
-- Indexes for table `InvCalendarDay`
--
ALTER TABLE `InvCalendarDay`
  ADD PRIMARY KEY (`inv_calendarday_id`),
  ADD UNIQUE KEY `inv_calendarday_ref` (`inv_calendarday_ref`),
  ADD KEY `inv_calendarday_date` (`inv_calendarday_date`),
  ADD KEY `inv_calendarday_calendarid` (`inv_calendarday_calendarid`),
  ADD KEY `inv_calendarday_weekday` (`inv_calendarday_weekday`),
  ADD KEY `inv_calendarday_month` (`inv_calendarday_month`),
  ADD KEY `inv_calendarday_week` (`inv_calendarday_week`),
  ADD KEY `inv_calendarday_hollyday` (`inv_calendarday_hollyday_name`),
  ADD KEY `inv_calendarday_type` (`inv_calendarday_type`);

--
-- Indexes for table `InvCalendarFixedHollyday`
--
ALTER TABLE `InvCalendarFixedHollyday`
  ADD PRIMARY KEY (`inv_calendarfixedhollyday_id`);

--
-- Indexes for table `InvCalendarVariableHollyday`
--
ALTER TABLE `InvCalendarVariableHollyday`
  ADD PRIMARY KEY (`inv_calendarvariableholliday_id`);

--
-- Indexes for table `InvTeam`
--
ALTER TABLE `InvTeam`
  ADD PRIMARY KEY (`inv_team_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `InvCalendar`
--
ALTER TABLE `InvCalendar`
  MODIFY `inv_calendar_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `InvCalendarDay`
--
ALTER TABLE `InvCalendarDay`
  MODIFY `inv_calendarday_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
