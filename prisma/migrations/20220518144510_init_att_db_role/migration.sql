/*
  Warnings:

  - You are about to drop the `servidor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `servidor`;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `role` ENUM('servidor', 'admin', 'reitor', 'dep') NOT NULL DEFAULT 'servidor',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
