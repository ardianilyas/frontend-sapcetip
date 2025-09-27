import z from "zod";

export const loginSchema = z.object({
    email: z.email("Invalid email").min(1, 'Email is required'),
    password: z.string().min(1, 'Password is required')
});

export const registerSchema = z.object({
    name: z.string().min(1, 'Username is required'),
    email: z.email("Invalid email").min(1, 'Email is required'),
    password: z.string().min(1, 'Password is required')
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;