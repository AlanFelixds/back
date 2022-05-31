/*
  Warnings:

  - You are about to alter the column `event_date` on the `events` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[name]` on the table `participants` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `events` MODIFY `event_date` DATETIME NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `participants_name_key` ON `participants`(`name`);
