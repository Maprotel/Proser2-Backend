-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 15, 2020 at 04:49 PM
-- Server version: 10.3.14-MariaDB
-- PHP Version: 7.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proser_inv_hmo_emergencia`
--

-- --------------------------------------------------------

--
-- Table structure for table `ProShowDisplay`
--

DROP TABLE IF EXISTS `ProShowDisplay`;
CREATE TABLE IF NOT EXISTS `ProShowDisplay` (
  `pro_show_display_id` int(10) NOT NULL,
  `pro_show_display_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `pro_show_display_weekday` varchar(255) DEFAULT NULL,
  `pro_show_display_start_time` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
  `pro_show_display_end_time` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `pro_show_display_type` varchar(255) DEFAULT NULL,
  `pro_show_display_selection` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '\'\\\'{"userSelection":{}}\\\'\'',
  `pro_show_display_view` varchar(255) DEFAULT NULL,
  `pro_show_display_status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `ProShowDisplay`
--

INSERT INTO `ProShowDisplay` (`pro_show_display_id`, `pro_show_display_name`, `pro_show_display_weekday`, `pro_show_display_start_time`, `pro_show_display_end_time`, `pro_show_display_type`, `pro_show_display_selection`, `pro_show_display_view`, `pro_show_display_status`) VALUES
(30, 'Turno I', NULL, '07:00:00', NULL, NULL, '{"title":"Turno I","entity_selection":"-","options":"","legend":"Hora inicio: 07:00:00 - Hora fin: 12:59:59","login":{"id":0,"name":"username","profile":"profile"},"mode":{"id":1,"name":"Historic","value":true},"type":{"id":0,"name":"Ejecutado"},"start_date":{"year":2019,"month":12,"day":15},"end_date":{"year":2019,"month":12,"day":15},"start_time":{"id":0,"value":"07:00:00"},"end_time":{"id":0,"value":"12:59:59"},"auxiliar":[],"assignation":[],"client":[],"queue":[],"service":[],"campaign":[],"supervisor":[],"agent":[],"role":[],"schedule":[],"status":{"id":0,"name":"Activo","value":"A"},"last_minutes":null,"interval":null,"groupBy":{"id":3,"name":"COLA","Inv_id":"inv_queue_id","Inv_name":"inv_queue_name","MainCallEntry_json_id":"JSON_UNQUOTE(JSON_EXTRACT(callentry_operation_json, \\"$.queue[0].id\\"))","MainCdr_json_id":"JSON_UNQUOTE(JSON_EXTRACT(cdr_operation_json, \\"$.queue[0].id\\"))","MainAudit_json_id":"JSON_UNQUOTE(JSON_EXTRACT(audit_operation_json, \\"$.queue[0].id\\"))"},"orderBy":{},"limitBy":{},"start_time_hour":{"hour":7,"minute":0,"second":0},"end_time_hour":{"hour":12,"minute":59,"second":59},"current_date":{"year":2019,"month":12,"day":16}}', NULL, NULL),
(31, 'Turno II', NULL, '13:00:00', NULL, NULL, '{"title":"Turno II","entity_selection":"-","options":"","legend":"Hora inicio: 13:00:00 - Hora fin: 16:59:59","login":{"id":0,"name":"username","profile":"profile"},"mode":{"id":1,"name":"Historic","value":true},"type":{"id":0,"name":"Ejecutado"},"start_date":{"year":2019,"month":12,"day":16},"end_date":{"year":2019,"month":12,"day":16},"start_time":{"id":0,"value":"13:00:00"},"end_time":{"id":0,"value":"16:59:59"},"auxiliar":[],"assignation":[],"client":[],"queue":[],"service":[],"campaign":[],"supervisor":[],"agent":[],"role":[],"schedule":[],"status":{"id":0,"name":"Activo","value":"A"},"last_minutes":null,"interval":null,"groupBy":{"id":3,"name":"COLA","Inv_id":"inv_queue_id","Inv_name":"inv_queue_name","MainCallEntry_json_id":"JSON_UNQUOTE(JSON_EXTRACT(callentry_operation_json, \\"$.queue[0].id\\"))","MainCdr_json_id":"JSON_UNQUOTE(JSON_EXTRACT(cdr_operation_json, \\"$.queue[0].id\\"))","MainAudit_json_id":"JSON_UNQUOTE(JSON_EXTRACT(audit_operation_json, \\"$.queue[0].id\\"))"},"orderBy":{},"limitBy":{},"start_time_hour":{"hour":13,"minute":0,"second":0},"end_time_hour":{"hour":16,"minute":59,"second":59},"current_date":{"year":2019,"month":12,"day":16}}', NULL, NULL),
(32, 'Turno III', NULL, '19:00:00', NULL, NULL, '{"title":"Turno III","entity_selection":"-","options":"","legend":"Hora inicio: 19:00:00 - Hora fin: 06:59:59","login":{"id":0,"name":"username","profile":"profile"},"mode":{"id":1,"name":"Historic","value":true},"type":{"id":0,"name":"Ejecutado"},"start_date":{"year":2019,"month":12,"day":16},"end_date":{"year":2019,"month":12,"day":16},"start_time":{"id":0,"value":"19:00:00"},"end_time":{"id":0,"value":"06:59:59"},"auxiliar":[],"assignation":[],"client":[],"queue":[],"service":[],"campaign":[],"supervisor":[],"agent":[],"role":[],"schedule":[],"status":{"id":0,"name":"Activo","value":"A"},"last_minutes":null,"interval":null,"groupBy":{"id":3,"name":"COLA","Inv_id":"inv_queue_id","Inv_name":"inv_queue_name","MainCallEntry_json_id":"JSON_UNQUOTE(JSON_EXTRACT(callentry_operation_json, \\"$.queue[0].id\\"))","MainCdr_json_id":"JSON_UNQUOTE(JSON_EXTRACT(cdr_operation_json, \\"$.queue[0].id\\"))","MainAudit_json_id":"JSON_UNQUOTE(JSON_EXTRACT(audit_operation_json, \\"$.queue[0].id\\"))"},"orderBy":{},"limitBy":{},"start_time_hour":{"hour":19,"minute":0,"second":0},"end_time_hour":{"hour":6,"minute":59,"second":59},"current_date":{"year":2019,"month":12,"day":16}}', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ProShowDisplay`
--
ALTER TABLE `ProShowDisplay`
  ADD PRIMARY KEY (`pro_show_display_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ProShowDisplay`
--
ALTER TABLE `ProShowDisplay`
  MODIFY `pro_show_display_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=33;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
