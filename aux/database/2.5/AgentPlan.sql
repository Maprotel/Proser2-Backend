-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 03-02-2020 a las 08:49:32
-- Versión del servidor: 10.4.10-MariaDB-1:10.4.10+maria~bionic-log
-- Versión de PHP: 7.3.12-1+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proser-inv-proser_base`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `AgentPlan`
--

DROP TABLE IF EXISTS `AgentPlan`;
CREATE TABLE `AgentPlan` (
  `agent_plan_id` int(11) NOT NULL,
  `agent_plan_agent_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `agent_plan_agent_id` int(11) DEFAULT NULL,
  `agent_plan_date` date DEFAULT NULL,
  `agent_plan_start_time` time DEFAULT NULL,
  `agent_plan_end_time` time DEFAULT NULL,
  `agent_plan_agent_status` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `AgentPlan`
--
ALTER TABLE `AgentPlan`
  ADD PRIMARY KEY (`agent_plan_id`),
  ADD KEY `agent_plan_agent_name` (`agent_plan_agent_name`),
  ADD KEY `agent_plan_agent_id` (`agent_plan_agent_id`),
  ADD KEY `agent_plan_date` (`agent_plan_date`),
  ADD KEY `agent_plan_start_time` (`agent_plan_start_time`),
  ADD KEY `agent_plan_end_time` (`agent_plan_end_time`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `AgentPlan`
--
ALTER TABLE `AgentPlan`
  MODIFY `agent_plan_id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
