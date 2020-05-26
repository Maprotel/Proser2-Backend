-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 26, 2020 at 12:15 PM
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
-- Table structure for table `PlanCalendar`
--

DROP TABLE IF EXISTS `PlanCalendar`;
CREATE TABLE `PlanCalendar` (
  `plan_calendar_id` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `plan_calendar_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `plan_calendar_type` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `plan_calendar_status` varchar(11) COLLATE utf8_spanish_ci DEFAULT 'A',
  `plan_calendar_chk` int(100) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PlanCalendarFixedHollyday`
--

DROP TABLE IF EXISTS `PlanCalendarFixedHollyday`;
CREATE TABLE `PlanCalendarFixedHollyday` (
  `plan_calendarfixedhollyday_id` varchar(5) COLLATE utf8_spanish_ci NOT NULL,
  `plan_calendarfixedhollyday_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `plan_calendarfixedhollyday_calendar_id` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PlanCalendarVariableHollyday`
--

DROP TABLE IF EXISTS `PlanCalendarVariableHollyday`;
CREATE TABLE `PlanCalendarVariableHollyday` (
  `plan_calendarvariableholliday_id` date NOT NULL,
  `plan_calendarvariableholliday_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `plan_calendarvariableholliday_calendar_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PlanPbxAgents`
--

DROP TABLE IF EXISTS `PlanPbxAgents`;
CREATE TABLE `PlanPbxAgents` (
  `plan_pbxagent_id` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `plan_pbxagent_name` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `plan_pbxagent_people_id` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PlanPeople`
--

DROP TABLE IF EXISTS `PlanPeople`;
CREATE TABLE `PlanPeople` (
  `plan_people_id` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `plan_people_name` int(11) DEFAULT NULL,
  `plan_people_profile` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PlanPeopleAssignation`
--

DROP TABLE IF EXISTS `PlanPeopleAssignation`;
CREATE TABLE `PlanPeopleAssignation` (
  `plan_assignation_id` int(11) NOT NULL,
  `plan_assignation_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `__TIME__` int(1) DEFAULT NULL,
  `plan_assignation_datetime_start` datetime DEFAULT NULL,
  `plan_assignation_datetime_end` datetime DEFAULT NULL,
  `plan_assignation_permanent_type` int(11) NOT NULL,
  `__ASSIGNATION__` int(1) DEFAULT NULL,
  `plan_assignation_people_id` int(11) DEFAULT NULL,
  `plan_assignation_supervisor_id` int(11) DEFAULT NULL,
  `plan_assignation_shift_id` int(11) DEFAULT NULL,
  `plan_assignation_team_id` int(11) DEFAULT NULL,
  `plan_assignation_role_id` int(11) DEFAULT NULL,
  `plan_assignation_supervisor_list` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PlanRole`
--

DROP TABLE IF EXISTS `PlanRole`;
CREATE TABLE `PlanRole` (
  `plan_role_id` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `plan_role_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `plan_role_type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PlanShift`
--

DROP TABLE IF EXISTS `PlanShift`;
CREATE TABLE `PlanShift` (
  `plan_shift_id` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `plan_shift_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `plan_shift_type` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `plan_shift_start` time DEFAULT NULL,
  `plan_shift_end` time DEFAULT NULL,
  `plan_shift_breaktimeminutes` int(11) DEFAULT NULL,
  `plan_shift_hollydays` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `plan_shift_hollyday_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `plan_shift_lastgeneratedyear` int(11) DEFAULT NULL,
  `plan_shift_status` varchar(11) COLLATE utf8_spanish_ci DEFAULT 'A',
  `plan_calendar_chk` int(100) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PlanShiftDay`
--

DROP TABLE IF EXISTS `PlanShiftDay`;
CREATE TABLE `PlanShiftDay` (
  `plan_shiftday_id` int(11) NOT NULL,
  `plan_shiftday_calendarid` int(11) DEFAULT NULL,
  `plan_shiftday_date` date NOT NULL,
  `plan_shiftday_ref` varchar(50) GENERATED ALWAYS AS (concat(`plan_shiftday_calendarid`,'-',`plan_shiftday_date`)) STORED,
  `__CLASSIFICATION__` int(1) DEFAULT NULL,
  `plan_shiftday_weekday` int(10) GENERATED ALWAYS AS (weekday(`plan_shiftday_date`) + 1) STORED,
  `plan_shiftday_month` int(10) GENERATED ALWAYS AS (month(`plan_shiftday_date`) + 0) STORED,
  `plan_shiftday_week` int(10) GENERATED ALWAYS AS (week(`plan_shiftday_date`,3) + 0) STORED,
  `plan_shiftday_monthday` int(10) GENERATED ALWAYS AS (dayofmonth(`plan_shiftday_date`) + 0) STORED,
  `plan_shiftday_monthday_id` varchar(5) CHARACTER SET utf8 GENERATED ALWAYS AS (concat(lpad(`plan_shiftday_month`,2,0),'-',lpad(`plan_shiftday_monthday`,2,0))) STORED,
  `plan_shiftday_year` varchar(100) GENERATED ALWAYS AS (year(`plan_shiftday_date`)) STORED,
  `plan_shiftday_yearmonth` varchar(100) GENERATED ALWAYS AS (concat(year(`plan_shiftday_date`),'-',lpad(month(`plan_shiftday_date`),2,0))) STORED,
  `__HOURS__` int(1) DEFAULT NULL,
  `plan_shiftday_start` time DEFAULT NULL,
  `plan_shiftday_end` time DEFAULT NULL,
  `plan_shiftday_starttime` varchar(50) GENERATED ALWAYS AS (concat(`plan_shiftday_date`,' ',`plan_shiftday_start`)) STORED,
  `plan_shiftday_endtime` varchar(50) GENERATED ALWAYS AS (if(`plan_shiftday_start` <= `plan_shiftday_end`,concat(`plan_shiftday_date`,' ',`plan_shiftday_end`),concat(`plan_shiftday_date` + interval 1 day,' ',`plan_shiftday_end`))) STORED,
  `plan_shiftday_breaktimeminutes` int(11) DEFAULT NULL,
  `plan_shiftday_workingminutes` int(10) GENERATED ALWAYS AS (timestampdiff(MINUTE,`plan_shiftday_starttime`,`plan_shiftday_endtime`) - `plan_shiftday_breaktimeminutes`) STORED,
  `__TYPIFICATION__` int(1) DEFAULT NULL,
  `plan_shiftday_hollyday_name` varchar(100) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'NULL',
  `plan_shiftday_workingday` int(10) GENERATED ALWAYS AS (if(octet_length(`plan_shiftday_hollyday_name`) > 0,1,0)) STORED,
  `plan_shiftday_type` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `__JSON__` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL,
  `plan_shiftday_date_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `PlanTeam`
--

DROP TABLE IF EXISTS `PlanTeam`;
CREATE TABLE `PlanTeam` (
  `plan_team_id` int(11) NOT NULL,
  `plan_team_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `PlanCalendar`
--
ALTER TABLE `PlanCalendar`
  ADD PRIMARY KEY (`plan_calendar_id`);

--
-- Indexes for table `PlanCalendarFixedHollyday`
--
ALTER TABLE `PlanCalendarFixedHollyday`
  ADD PRIMARY KEY (`plan_calendarfixedhollyday_id`);

--
-- Indexes for table `PlanCalendarVariableHollyday`
--
ALTER TABLE `PlanCalendarVariableHollyday`
  ADD PRIMARY KEY (`plan_calendarvariableholliday_id`);

--
-- Indexes for table `PlanPbxAgents`
--
ALTER TABLE `PlanPbxAgents`
  ADD UNIQUE KEY `plan_pbxagent_id` (`plan_pbxagent_id`) USING BTREE,
  ADD KEY `plan_pbxagent_people_id` (`plan_pbxagent_people_id`);

--
-- Indexes for table `PlanPeople`
--
ALTER TABLE `PlanPeople`
  ADD PRIMARY KEY (`plan_people_id`);

--
-- Indexes for table `PlanPeopleAssignation`
--
ALTER TABLE `PlanPeopleAssignation`
  ADD PRIMARY KEY (`plan_assignation_id`);

--
-- Indexes for table `PlanRole`
--
ALTER TABLE `PlanRole`
  ADD PRIMARY KEY (`plan_role_id`);

--
-- Indexes for table `PlanShift`
--
ALTER TABLE `PlanShift`
  ADD PRIMARY KEY (`plan_shift_id`);

--
-- Indexes for table `PlanShiftDay`
--
ALTER TABLE `PlanShiftDay`
  ADD PRIMARY KEY (`plan_shiftday_id`),
  ADD UNIQUE KEY `plan_shiftday_ref` (`plan_shiftday_ref`),
  ADD KEY `plan_shiftday_date` (`plan_shiftday_date`),
  ADD KEY `plan_shiftday_calendarid` (`plan_shiftday_calendarid`),
  ADD KEY `plan_shiftday_weekday` (`plan_shiftday_weekday`),
  ADD KEY `plan_shiftday_month` (`plan_shiftday_month`),
  ADD KEY `plan_shiftday_week` (`plan_shiftday_week`),
  ADD KEY `plan_shiftday_hollyday` (`plan_shiftday_hollyday_name`),
  ADD KEY `plan_shiftday_type` (`plan_shiftday_type`);

--
-- Indexes for table `PlanTeam`
--
ALTER TABLE `PlanTeam`
  ADD PRIMARY KEY (`plan_team_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `PlanShiftDay`
--
ALTER TABLE `PlanShiftDay`
  MODIFY `plan_shiftday_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
