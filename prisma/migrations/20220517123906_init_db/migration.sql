/*
  Warnings:

  - You are about to drop the column `participantsID` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `users` table. All the data in the column will be lost.
  - Added the required column `teacher` to the `Events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherEmail` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `Events_participantsID_fkey`;

-- AlterTable
ALTER TABLE `events` DROP COLUMN `participantsID`,
    ADD COLUMN `teacher` VARCHAR(191) NOT NULL,
    ADD COLUMN `teacherEmail` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `user`;
