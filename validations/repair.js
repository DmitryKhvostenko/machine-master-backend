import { body } from 'express-validator'

export const repairValidation = [
	body('brand', 'Невірна назва бренду'),
	body('year', 'Введений рік має бути числом').isNumeric(),
	body('country', 'Некоректно введена країна'),
	body('repairTypeId', 'Невірний id типу ремонту').isMongoId(),
	body('notes', 'Додайте примітки').optional(),
	body('startDate', 'Невірна дата початку').isISO8601(),
]
