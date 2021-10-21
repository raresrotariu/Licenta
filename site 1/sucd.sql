-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Gazdă: 127.0.0.1
-- Timp de generare: oct. 21, 2021 la 03:51 AM
-- Versiune server: 10.4.13-MariaDB
-- Versiune PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Bază de date: `sucd`
--

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `clienti`
--

CREATE TABLE `clienti` (
  `id` int(11) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Nume` varchar(255) NOT NULL,
  `Prenume` varchar(255) NOT NULL,
  `Judet` varchar(255) NOT NULL,
  `Oras` varchar(255) NOT NULL,
  `Adresa` varchar(255) NOT NULL,
  `Varsta` int(11) NOT NULL,
  `NrInmatriculare` varchar(255) NOT NULL,
  `CodMotor` varchar(255) NOT NULL,
  `Accidente` int(11) NOT NULL,
  `Abonament` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Eliminarea datelor din tabel `clienti`
--

INSERT INTO `clienti` (`id`, `Email`, `Nume`, `Prenume`, `Judet`, `Oras`, `Adresa`, `Varsta`, `NrInmatriculare`, `CodMotor`, `Accidente`, `Abonament`) VALUES
(3, 'raresrotariu@gmail.com', 'Rares', 'Rotariu', 'Brasov', 'Fagaras', 'Fagaras str. Negoiu , nr.44', 23, '28bvjps', 'sadsa', 0, 2),
(5, 'mircea@mircea.ro', '', '', '', '', '', 0, '', '', 0, 0);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Eliminarea datelor din tabel `login`
--

INSERT INTO `login` (`id`, `name`, `email`, `password`) VALUES
(4, 'Rotariu Rares', 'raresrotariu@gmail.com', 'merge'),
(6, 'Rotariu Rares', 'raresrotariu@gmail.com', '65464c31b2e6ac04da1fcaa37c9bd9c7');

--
-- Indexuri pentru tabele eliminate
--

--
-- Indexuri pentru tabele `clienti`
--
ALTER TABLE `clienti`
  ADD PRIMARY KEY (`id`);

--
-- Indexuri pentru tabele `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pentru tabele eliminate
--

--
-- AUTO_INCREMENT pentru tabele `clienti`
--
ALTER TABLE `clienti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pentru tabele `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
