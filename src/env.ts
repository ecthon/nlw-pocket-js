import z from 'zod'

// Essa verificação vai garantir que a minha variável exista
// Se ela não existir, vai dar um erro e não deixar a aplicação seguir
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
