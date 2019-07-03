-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 03-Jul-2019 às 09:47
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rental_movies`
--
CREATE DATABASE IF NOT EXISTS `rental_movies` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `rental_movies`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `movies`
--

CREATE TABLE `movies` (
  `idMovie` int(11) NOT NULL,
  `titleMovie` varchar(255) DEFAULT NULL,
  `directorMovie` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `movies`
--

INSERT INTO `movies` (`idMovie`, `titleMovie`, `directorMovie`) VALUES
(1, 'Vingadores: Ultimato', ' Anthony Russo, Joe Russo'),
(2, 'Aladdin', 'Guy Ritchie'),
(3, 'Dark Phoenix', 'Simon Kinberg'),
(4, 'The Lion King', 'Jon Favreau'),
(5, 'Toy Story 4', 'Josh Cooley'),
(6, 'Dumbo', 'Tim Burton'),
(7, 'Shazam', 'David F. Sandberg'),
(8, 'Joker', 'Todd Phillips'),
(9, 'John Wick 3: Parabellum', 'Chad Stahelski'),
(10, 'Rambo 5', 'Adrian Grunberg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `rents`
--

CREATE TABLE `rents` (
  `idRent` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idMovie` int(11) NOT NULL,
  `dataRent` datetime DEFAULT NULL,
  `returnRent` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

--
-- Estrutura da tabela `stock`
--

CREATE TABLE `stock` (
  `idStock` int(11) NOT NULL,
  `idMovie` int(11) DEFAULT NULL,
  `totalMovies` int(11) DEFAULT NULL,
  `stockMovies` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `stock`
--

INSERT INTO `stock` (`idStock`, `idMovie`, `totalMovies`, `stockMovies`) VALUES
(1, 1, 2, 2),
(2, 2, 2, 2),
(3, 3, 2, 2),
(4, 4, 2, 2),
(5, 5, 2, 2),
(6, 6, 2, 2),
(7, 7, 2, 2),
(8, 8, 2, 2),
(9, 9, 2, 2),
(10, 10, 2, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `nameUser` varchar(255) DEFAULT NULL,
  `emailUser` varchar(255) DEFAULT NULL,
  `passWordUser` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`idMovie`);

--
-- Indexes for table `rents`
--
ALTER TABLE `rents`
  ADD PRIMARY KEY (`idRent`),
  ADD KEY `fk_rent_user` (`idUser`),
  ADD KEY `fk_rent_movie` (`idMovie`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`idStock`),
  ADD KEY `fk_stock_movie` (`idMovie`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `idMovie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `rents`
--
ALTER TABLE `rents`
  MODIFY `idRent` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `idStock` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `rents`
--
ALTER TABLE `rents`
  ADD CONSTRAINT `fk_rent_movie` FOREIGN KEY (`idMovie`) REFERENCES `movies` (`idMovie`),
  ADD CONSTRAINT `fk_rent_user` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`);

--
-- Limitadores para a tabela `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `fk_stock_movie` FOREIGN KEY (`idMovie`) REFERENCES `movies` (`idMovie`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
