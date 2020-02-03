-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 03-02-2020 a las 08:49:06
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
-- Estructura de tabla para la tabla `AgentException`
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

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `AgentException`
--
ALTER TABLE `AgentException`
  ADD PRIMARY KEY (`agent_excep_id`),
  ADD KEY `agent_excep_agent_name` (`agent_excep_agent_name`),
  ADD KEY `agent_excep_agent_id` (`agent_excep_agent_id`),
  ADD KEY `agent_excep_datetime_init` (`agent_excep_date_init`),
  ADD KEY `agent_excep_datetime_end` (`agent_excep_date_end`),
  ADD KEY `agent_excep_name` (`agent_excep_type`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `AgentException`
--
ALTER TABLE `AgentException`
  MODIFY `agent_excep_id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
