-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 19, 2020 at 11:01 AM
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
-- Database: `proser-inv-proser_base`
--
CREATE DATABASE IF NOT EXISTS `proser-inv-proser_base` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `proser-inv-proser_base`;

-- --------------------------------------------------------

--
-- Table structure for table `AccessToken`
--

DROP TABLE IF EXISTS `AccessToken`;
CREATE TABLE `AccessToken` (
  `id` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `ttl` int(11) DEFAULT NULL,
  `scopes` text COLLATE utf8_spanish_ci DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ACL`
--

DROP TABLE IF EXISTS `ACL`;
CREATE TABLE `ACL` (
  `id` int(11) NOT NULL,
  `model` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `property` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `accessType` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `permission` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `principalType` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `principalId` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `AgentException`
--

DROP TABLE IF EXISTS `AgentException`;
CREATE TABLE `AgentException` (
  `agent_excep_id` int(11) NOT NULL,
  `agent_excep_agent_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `agent_excep_agent_id` int(11) DEFAULT NULL,
  `agent_excep_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `agent_excep_date_init` date DEFAULT NULL,
  `agent_excep_date_end` date DEFAULT NULL,
  `agent_excep_start_time` time DEFAULT NULL,
  `agent_excep_end_time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Table structure for table `AgentPlan`
--

DROP TABLE IF EXISTS `AgentPlan`;
CREATE TABLE `AgentPlan` (
  `agent_plan_id` int(11) NOT NULL,
  `agent_plan_agent_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `agent_plan_agent_id` int(11) DEFAULT NULL,
  `agent_plan_date` date DEFAULT NULL,
  `agent_plan_start_time` time DEFAULT NULL,
  `agent_plan_end_time` time DEFAULT NULL,
  `agent_plan_agent_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Table structure for table `AuxColor`
--

DROP TABLE IF EXISTS `AuxColor`;
CREATE TABLE `AuxColor` (
  `aux_color_id` int(10) NOT NULL,
  `aux_color_name` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `aux_color_string` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `aux_color_use` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `aux_color_status` varchar(1) COLLATE utf8_spanish_ci DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `AuxHour`
--

DROP TABLE IF EXISTS `AuxHour`;
CREATE TABLE `AuxHour` (
  `aux_hour_id` int(11) NOT NULL,
  `aux_hour_name` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `aux_hour_value` time DEFAULT NULL,
  `aux_hour_status` varchar(1) COLLATE utf8_spanish_ci DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `AuxInfo`
--

DROP TABLE IF EXISTS `AuxInfo`;
CREATE TABLE `AuxInfo` (
  `aux_info_id` int(10) NOT NULL,
  `aux_info_name` varchar(100) DEFAULT NULL,
  `aux_info_value` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `AuxInterval`
--

DROP TABLE IF EXISTS `AuxInterval`;
CREATE TABLE `AuxInterval` (
  `aux_interval_id` int(10) NOT NULL,
  `aux_interval_name` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `aux_interval_minutes` int(11) DEFAULT NULL,
  `aux_interval_value` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `aux_interval_status` varchar(1) COLLATE utf8_spanish_ci DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `AuxLine`
--

DROP TABLE IF EXISTS `AuxLine`;
CREATE TABLE `AuxLine` (
  `aux_line_id` int(11) NOT NULL,
  `aux_line_name` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `aux_line_value` int(11) DEFAULT NULL,
  `aux_line_status` varchar(1) COLLATE utf8_spanish_ci DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `Employee`
--

DROP TABLE IF EXISTS `Employee`;
CREATE TABLE `Employee` (
  `employeeID` int(11) NOT NULL,
  `employeeFullName` varchar(100) DEFAULT NULL,
  `employeeCode` varchar(20) DEFAULT NULL,
  `employeeMobile` varchar(50) DEFAULT NULL,
  `employeePosition` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `HcxChange`
--

DROP TABLE IF EXISTS `HcxChange`;
CREATE TABLE `HcxChange` (
  `hcx_id` int(10) NOT NULL,
  `hcx_timestamp` timestamp NULL DEFAULT current_timestamp(),
  `hcx_date_from` date DEFAULT NULL,
  `hcx_time_from` time DEFAULT NULL,
  `hcx_table` text DEFAULT NULL,
  `hcx_action` varchar(50) NOT NULL DEFAULT 'NULL',
  `hcx_record` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `hcx_record_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `InvAgent`
--

DROP TABLE IF EXISTS `InvAgent`;
CREATE TABLE `InvAgent` (
  `inv_agent_id` int(10) NOT NULL,
  `inv_agent_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_chk` int(10) DEFAULT 1,
  `inv_agent_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_extension` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_legal_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_internal_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_agent_type` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `__JSON__` int(1) DEFAULT NULL,
  `inv_agent_people_json` varchar(250) COLLATE utf8_spanish_ci DEFAULT '{"supervisor":[], "role":[]}',
  `inv_agent_operation_json` varchar(250) COLLATE utf8_spanish_ci DEFAULT '	{"client":[], "queue":[], "service":[], "campaign":[]}',
  `inv_agent_time_json` varchar(250) COLLATE utf8_spanish_ci DEFAULT '{"calendar":[], "schedule":[]}'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `InvAgentRole`
--

DROP TABLE IF EXISTS `InvAgentRole`;
CREATE TABLE `InvAgentRole` (
  `inv_agentrole_id` int(10) NOT NULL,
  `inv_agentrole_name` varchar(100) DEFAULT NULL,
  `inv_agentrole_status` varchar(1) DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `InvBreak`
--

DROP TABLE IF EXISTS `InvBreak`;
CREATE TABLE `InvBreak` (
  `inv_break_id` int(10) NOT NULL,
  `inv_break_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT 'A',
  `inv_break_chk` int(1) DEFAULT 1,
  `inv_break_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_break_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_break_codename` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_break_description` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_break_type` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_break_productivity` int(11) DEFAULT 0,
  `inv_break_class` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL
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

-- --------------------------------------------------------

--
-- Table structure for table `InvCalendarDay`
--

DROP TABLE IF EXISTS `InvCalendarDay`;
CREATE TABLE `InvCalendarDay` (
  `inv_calendarday_id` int(10) NOT NULL,
  `inv_calendar_id` int(11) DEFAULT NULL,
  `inv_calendarday_status` varchar(1) COLLATE utf8_spanish_ci DEFAULT 'A',
  `inv_calendarday_date` date DEFAULT NULL,
  `inv_calendarday_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_calendarday_type` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `__JSON__` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_calendarday_date_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `InvCampaign`
--

DROP TABLE IF EXISTS `InvCampaign`;
CREATE TABLE `InvCampaign` (
  `inv_campaign_id` int(10) NOT NULL,
  `inv_campaign_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_chk` int(10) DEFAULT NULL,
  `inv_campaign_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_description` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_queue_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_queue_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_queue_number` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_campaign_aftercall_time` int(10) DEFAULT NULL,
  `inv_campaign_start_date` date DEFAULT NULL,
  `inv_campaign_end_date` date DEFAULT NULL,
  `inv_campaign_start_time` time DEFAULT NULL,
  `inv_campaign_end_time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `InvClient`
--

DROP TABLE IF EXISTS `InvClient`;
CREATE TABLE `InvClient` (
  `inv_client_id` int(10) NOT NULL,
  `inv_client_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_client_chk` int(10) DEFAULT NULL,
  `inv_client_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_client_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_client_type` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `InvQueue`
--

DROP TABLE IF EXISTS `InvQueue`;
CREATE TABLE `InvQueue` (
  `inv_queue_id` int(10) NOT NULL,
  `inv_queue_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_queue_chk` int(10) DEFAULT NULL,
  `inv_queue_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_queue_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_queue_sms_name` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_queue_number` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_queue_type` varchar(50) GENERATED ALWAYS AS (if(substr(`inv_queue_number`,1,1) = 9,'automatic','inbound')) STORED,
  `__JSON__` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_queue_operation_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '{"client":[], "service":[]}',
  `inv_queue_system_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '{"scale":[]}'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `InvQueueConfig`
--

DROP TABLE IF EXISTS `InvQueueConfig`;
CREATE TABLE `InvQueueConfig` (
  `queueconfig_extension` varchar(20) NOT NULL DEFAULT '',
  `queueconfig_descr` varchar(35) NOT NULL DEFAULT '',
  `queueconfig_grppre` varchar(100) NOT NULL DEFAULT '',
  `queueconfig_alertinfo` varchar(254) NOT NULL DEFAULT '',
  `queueconfig_ringing` tinyint(1) NOT NULL DEFAULT 0,
  `queueconfig_maxwait` varchar(8) NOT NULL DEFAULT '',
  `queueconfig_password` varchar(20) NOT NULL DEFAULT '',
  `queueconfig_ivr_id` varchar(8) NOT NULL DEFAULT '0',
  `queueconfig_dest` varchar(50) NOT NULL DEFAULT '',
  `queueconfig_cwignore` tinyint(1) NOT NULL DEFAULT 0,
  `queueconfig_qregex` varchar(255) DEFAULT NULL,
  `queueconfig_agentannounce_id` int(11) DEFAULT NULL,
  `queueconfig_joinannounce_id` int(11) DEFAULT NULL,
  `queueconfig_queuewait` tinyint(1) DEFAULT 0,
  `queueconfig_use_queue_context` tinyint(1) DEFAULT 0,
  `queueconfig_togglehint` tinyint(1) DEFAULT 0,
  `queueconfig_qnoanswer` tinyint(1) DEFAULT 0,
  `queueconfig_callconfirm` tinyint(1) DEFAULT 0,
  `queueconfig_callconfirm_id` int(11) DEFAULT NULL,
  `queueconfig_monitor_type` varchar(5) DEFAULT NULL,
  `queueconfig_monitor_heard` int(11) DEFAULT NULL,
  `queueconfig_monitor_spoken` int(11) DEFAULT NULL,
  `queueconfig_callback_id` varchar(8) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `InvScale`
--

DROP TABLE IF EXISTS `InvScale`;
CREATE TABLE `InvScale` (
  `inv_scale_id` int(10) NOT NULL,
  `inv_scale_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_scale_chk` int(10) DEFAULT NULL,
  `inv_scale_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_scale_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_scale_red` int(10) DEFAULT NULL,
  `inv_scale_yellow` int(10) DEFAULT NULL,
  `inv_scale_green` int(10) DEFAULT NULL,
  `inv_scale_blue` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `InvSchedule`
--

DROP TABLE IF EXISTS `InvSchedule`;
CREATE TABLE `InvSchedule` (
  `inv_schedule_id` int(10) NOT NULL,
  `inv_schedule_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_schedule_chk` int(10) DEFAULT NULL,
  `inv_schedule_type` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_schedule_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_schedule_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_schedule_description` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `InvScheduleDay`
--

DROP TABLE IF EXISTS `InvScheduleDay`;
CREATE TABLE `InvScheduleDay` (
  `inv_scheduleday_id` int(11) NOT NULL,
  `inv_schedule_id` int(11) DEFAULT NULL,
  `inv_scheduleday_weekday` int(11) DEFAULT NULL,
  `inv_scheduleday_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_scheduleday_start_time` time DEFAULT NULL,
  `inv_scheduleday_end_time` time DEFAULT NULL,
  `inv_scheduleday_legal_break` time DEFAULT NULL,
  `inv_scheduleday_laborday` int(11) DEFAULT NULL,
  `inv_scheduleday_duration` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `InvService`
--

DROP TABLE IF EXISTS `InvService`;
CREATE TABLE `InvService` (
  `inv_service_id` int(10) NOT NULL,
  `inv_service_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_service_chk` int(10) DEFAULT NULL,
  `inv_service_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_service_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_service_type` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_service_use` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `InvSms`
--

DROP TABLE IF EXISTS `InvSms`;
CREATE TABLE `InvSms` (
  `inv_sms_id` int(10) NOT NULL,
  `inv_sms_date` date DEFAULT NULL,
  `inv_sms_time` time DEFAULT NULL,
  `inv_sms_msg` varchar(140) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_sms_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_sms_chk` int(10) DEFAULT NULL,
  `inv_sms_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `InvSupervisor`
--

DROP TABLE IF EXISTS `InvSupervisor`;
CREATE TABLE `InvSupervisor` (
  `inv_supervisor_id` int(10) NOT NULL,
  `inv_supervisor_status` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_supervisor_chk` int(10) DEFAULT NULL,
  `inv_supervisor_name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_supervisor_shortname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_supervisor_legal_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT 'NULL',
  `inv_supervisor_internal_id` varchar(20) COLLATE utf8_spanish_ci DEFAULT 'NULL',
  `__JSON__` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_supervisor_people_json` varchar(250) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_supervisor_operation_json` varchar(250) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inv_supervisor_time_json` varchar(250) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ProAgentPlan`
--

DROP TABLE IF EXISTS `ProAgentPlan`;
CREATE TABLE `ProAgentPlan` (
  `proplan_id` int(10) NOT NULL,
  `proplan_agent_id` int(10) DEFAULT NULL,
  `proplan_date` date DEFAULT NULL,
  `proplan_start_time` time DEFAULT NULL,
  `proplan_end_time` time DEFAULT NULL,
  `proplan_source` varchar(100) DEFAULT NULL,
  `proplan_status` varchar(10) DEFAULT NULL,
  `proplan_chk` varchar(10) DEFAULT NULL,
  `__JSON__` int(1) DEFAULT NULL,
  `proplan_people_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `proplan_operation_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `proplan_time_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ProScheduleChange`
--

DROP TABLE IF EXISTS `ProScheduleChange`;
CREATE TABLE `ProScheduleChange` (
  `pro_schedulechange_id` int(10) NOT NULL,
  `pro_schedulechange_agent_id` int(10) DEFAULT NULL,
  `pro_schedulechange_agent_name` varchar(250) DEFAULT NULL,
  `pro_schedulechange_start_date` date DEFAULT NULL,
  `pro_schedulechange_end_date` date DEFAULT NULL,
  `pro_schedulechange_start_time` time DEFAULT NULL,
  `pro_schedulechange_end_time` time DEFAULT NULL,
  `pro_schedulechange_type` varchar(250) DEFAULT NULL,
  `pro_schedulechange_description` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `ProShowDisplay`
--

DROP TABLE IF EXISTS `ProShowDisplay`;
CREATE TABLE `ProShowDisplay` (
  `pro_show_display_id` int(10) NOT NULL,
  `pro_show_display_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `pro_show_display_start_time` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
  `pro_show_display_selection` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '\'\\\'{"userSelection":{}}\\\'\'',
  `pro_show_display_status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `Role`
--

DROP TABLE IF EXISTS `Role`;
CREATE TABLE `Role` (
  `id` int(11) NOT NULL,
  `name` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `description` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `created` datetime DEFAULT current_timestamp(),
  `modified` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `RoleMapping`
--

DROP TABLE IF EXISTS `RoleMapping`;
CREATE TABLE `RoleMapping` (
  `id` int(11) NOT NULL,
  `principalType` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `principalId` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `realm` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `username` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `password` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Userbase`
--

DROP TABLE IF EXISTS `Userbase`;
CREATE TABLE `Userbase` (
  `id` int(11) NOT NULL,
  `firstname` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `lastname` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `profile` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `realm` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `username` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `password` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL,
  `memberId` int(11) DEFAULT NULL,
  `user_legal_id` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `user_internal_id` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `user_photo_path` varchar(150) COLLATE utf8_spanish_ci DEFAULT NULL,
  `profile_json` varchar(250) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `AccessToken`
--
ALTER TABLE `AccessToken`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ACL`
--
ALTER TABLE `ACL`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `AgentException`
--
ALTER TABLE `AgentException`
  ADD PRIMARY KEY (`agent_excep_id`),
  ADD KEY `agent_excep_agent_name` (`agent_excep_agent_name`),
  ADD KEY `agent_excep_agent_id` (`agent_excep_agent_id`),
  ADD KEY `agent_excep_datetime_init` (`agent_excep_date_init`),
  ADD KEY `agent_excep_datetime_end` (`agent_excep_date_end`),
  ADD KEY `agent_excep_name` (`agent_excep_type`);

--
-- Indexes for table `AgentPlan`
--
ALTER TABLE `AgentPlan`
  ADD PRIMARY KEY (`agent_plan_id`),
  ADD KEY `agent_plan_agent_name` (`agent_plan_agent_name`),
  ADD KEY `agent_plan_agent_id` (`agent_plan_agent_id`),
  ADD KEY `agent_plan_date` (`agent_plan_date`),
  ADD KEY `agent_plan_start_time` (`agent_plan_start_time`),
  ADD KEY `agent_plan_end_time` (`agent_plan_end_time`);

--
-- Indexes for table `AuxColor`
--
ALTER TABLE `AuxColor`
  ADD PRIMARY KEY (`aux_color_id`);

--
-- Indexes for table `AuxHour`
--
ALTER TABLE `AuxHour`
  ADD PRIMARY KEY (`aux_hour_id`);

--
-- Indexes for table `AuxInfo`
--
ALTER TABLE `AuxInfo`
  ADD PRIMARY KEY (`aux_info_id`);

--
-- Indexes for table `AuxInterval`
--
ALTER TABLE `AuxInterval`
  ADD PRIMARY KEY (`aux_interval_id`);

--
-- Indexes for table `AuxLine`
--
ALTER TABLE `AuxLine`
  ADD PRIMARY KEY (`aux_line_id`);

--
-- Indexes for table `Employee`
--
ALTER TABLE `Employee`
  ADD PRIMARY KEY (`employeeID`);

--
-- Indexes for table `HcxChange`
--
ALTER TABLE `HcxChange`
  ADD PRIMARY KEY (`hcx_id`);

--
-- Indexes for table `InvAgent`
--
ALTER TABLE `InvAgent`
  ADD PRIMARY KEY (`inv_agent_id`),
  ADD KEY `inv_agent_legal_id` (`inv_agent_legal_id`),
  ADD KEY `inv_agent_internal_id` (`inv_agent_internal_id`),
  ADD KEY `inv_agent_extension` (`inv_agent_extension`),
  ADD KEY `inv_agent_status` (`inv_agent_status`),
  ADD KEY `inv_agent_type` (`inv_agent_type`),
  ADD KEY `inv_agent_people_json` (`inv_agent_people_json`),
  ADD KEY `inv_agent_operation_json` (`inv_agent_operation_json`),
  ADD KEY `inv_agent_time_json` (`inv_agent_time_json`),
  ADD KEY `inv_agent_name` (`inv_agent_name`);

--
-- Indexes for table `InvAgentRole`
--
ALTER TABLE `InvAgentRole`
  ADD PRIMARY KEY (`inv_agentrole_id`);

--
-- Indexes for table `InvBreak`
--
ALTER TABLE `InvBreak`
  ADD PRIMARY KEY (`inv_break_id`),
  ADD KEY `inv_break_status` (`inv_break_status`),
  ADD KEY `inv_break_productivity` (`inv_break_productivity`),
  ADD KEY `inv_break_class` (`inv_break_class`);

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
  ADD UNIQUE KEY `inv_calendarday_date` (`inv_calendarday_date`),
  ADD KEY `inv_calendar_id` (`inv_calendar_id`);

--
-- Indexes for table `InvCampaign`
--
ALTER TABLE `InvCampaign`
  ADD PRIMARY KEY (`inv_campaign_id`),
  ADD KEY `inv_campaign_status` (`inv_campaign_status`),
  ADD KEY `inv_campaign_queue_id` (`inv_campaign_queue_id`),
  ADD KEY `inv_campaign_queue_number` (`inv_campaign_queue_number`),
  ADD KEY `inv_campaign_start_date_text` (`inv_campaign_start_date`),
  ADD KEY `inv_campaign_end_date_text` (`inv_campaign_end_date`),
  ADD KEY `inv_campaign_start_time_text` (`inv_campaign_start_time`),
  ADD KEY `inv_campaign_end_time_text` (`inv_campaign_end_time`);

--
-- Indexes for table `InvClient`
--
ALTER TABLE `InvClient`
  ADD PRIMARY KEY (`inv_client_id`),
  ADD KEY `inv_client_status` (`inv_client_status`),
  ADD KEY `inv_client_type` (`inv_client_type`);

--
-- Indexes for table `InvQueue`
--
ALTER TABLE `InvQueue`
  ADD PRIMARY KEY (`inv_queue_id`),
  ADD KEY `inv_queue_status` (`inv_queue_status`),
  ADD KEY `inv_queue_number` (`inv_queue_number`);

--
-- Indexes for table `InvQueueConfig`
--
ALTER TABLE `InvQueueConfig`
  ADD PRIMARY KEY (`queueconfig_extension`);

--
-- Indexes for table `InvScale`
--
ALTER TABLE `InvScale`
  ADD PRIMARY KEY (`inv_scale_id`);

--
-- Indexes for table `InvSchedule`
--
ALTER TABLE `InvSchedule`
  ADD PRIMARY KEY (`inv_schedule_id`),
  ADD KEY `inv_schedule_status` (`inv_schedule_status`);

--
-- Indexes for table `InvScheduleDay`
--
ALTER TABLE `InvScheduleDay`
  ADD PRIMARY KEY (`inv_scheduleday_id`),
  ADD KEY `inv_schedule_id` (`inv_schedule_id`),
  ADD KEY `inv_scheduleday_weekday` (`inv_scheduleday_weekday`);

--
-- Indexes for table `InvService`
--
ALTER TABLE `InvService`
  ADD PRIMARY KEY (`inv_service_id`),
  ADD KEY `inv_service_status` (`inv_service_status`),
  ADD KEY `inv_service_use` (`inv_service_use`),
  ADD KEY `inv_service_type` (`inv_service_type`);

--
-- Indexes for table `InvSms`
--
ALTER TABLE `InvSms`
  ADD PRIMARY KEY (`inv_sms_id`);

--
-- Indexes for table `InvSupervisor`
--
ALTER TABLE `InvSupervisor`
  ADD PRIMARY KEY (`inv_supervisor_id`),
  ADD KEY `inv_supervisor_legal_id` (`inv_supervisor_legal_id`),
  ADD KEY `inv_supervisor_internal_id` (`inv_supervisor_internal_id`),
  ADD KEY `inv_supervisor_status` (`inv_supervisor_status`);

--
-- Indexes for table `ProAgentPlan`
--
ALTER TABLE `ProAgentPlan`
  ADD PRIMARY KEY (`proplan_id`);

--
-- Indexes for table `ProScheduleChange`
--
ALTER TABLE `ProScheduleChange`
  ADD PRIMARY KEY (`pro_schedulechange_id`);

--
-- Indexes for table `ProShowDisplay`
--
ALTER TABLE `ProShowDisplay`
  ADD PRIMARY KEY (`pro_show_display_id`);

--
-- Indexes for table `Role`
--
ALTER TABLE `Role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `RoleMapping`
--
ALTER TABLE `RoleMapping`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `principalId` (`principalId`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Userbase`
--
ALTER TABLE `Userbase`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ACL`
--
ALTER TABLE `ACL`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `AgentException`
--
ALTER TABLE `AgentException`
  MODIFY `agent_excep_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `AgentPlan`
--
ALTER TABLE `AgentPlan`
  MODIFY `agent_plan_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `AuxColor`
--
ALTER TABLE `AuxColor`
  MODIFY `aux_color_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `AuxHour`
--
ALTER TABLE `AuxHour`
  MODIFY `aux_hour_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `AuxInfo`
--
ALTER TABLE `AuxInfo`
  MODIFY `aux_info_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `AuxInterval`
--
ALTER TABLE `AuxInterval`
  MODIFY `aux_interval_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `AuxLine`
--
ALTER TABLE `AuxLine`
  MODIFY `aux_line_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Employee`
--
ALTER TABLE `Employee`
  MODIFY `employeeID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `HcxChange`
--
ALTER TABLE `HcxChange`
  MODIFY `hcx_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `InvAgentRole`
--
ALTER TABLE `InvAgentRole`
  MODIFY `inv_agentrole_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `InvCalendar`
--
ALTER TABLE `InvCalendar`
  MODIFY `inv_calendar_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `InvCalendarDay`
--
ALTER TABLE `InvCalendarDay`
  MODIFY `inv_calendarday_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `InvClient`
--
ALTER TABLE `InvClient`
  MODIFY `inv_client_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `InvScale`
--
ALTER TABLE `InvScale`
  MODIFY `inv_scale_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `InvSchedule`
--
ALTER TABLE `InvSchedule`
  MODIFY `inv_schedule_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `InvScheduleDay`
--
ALTER TABLE `InvScheduleDay`
  MODIFY `inv_scheduleday_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `InvService`
--
ALTER TABLE `InvService`
  MODIFY `inv_service_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `InvSms`
--
ALTER TABLE `InvSms`
  MODIFY `inv_sms_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `InvSupervisor`
--
ALTER TABLE `InvSupervisor`
  MODIFY `inv_supervisor_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ProAgentPlan`
--
ALTER TABLE `ProAgentPlan`
  MODIFY `proplan_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ProScheduleChange`
--
ALTER TABLE `ProScheduleChange`
  MODIFY `pro_schedulechange_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ProShowDisplay`
--
ALTER TABLE `ProShowDisplay`
  MODIFY `pro_show_display_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Role`
--
ALTER TABLE `Role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `RoleMapping`
--
ALTER TABLE `RoleMapping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Userbase`
--
ALTER TABLE `Userbase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
