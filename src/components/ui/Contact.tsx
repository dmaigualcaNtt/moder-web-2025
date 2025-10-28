import { useState, useActionState, useOptimistic } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'

type FormState = {
  status: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

// Simulated async action (in real app, this would call an API)
async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Simulate random success/error for demo
  const success = Math.random() > 0.3

  if (success) {
    return {
      status: 'success',
      message: 'Thanks for reaching out! We\'ll get back to you soon.',
    }
  } else {
    return {
      status: 'error',
      message: 'Something went wrong. Please try again.',
    }
  }
}

export function Contact() {
  const [formState, setFormState] = useState<FormState>({ status: 'idle' })
  const [optimisticState, addOptimistic] = useOptimistic(
    formState,
    (state, newStatus: FormState['status']) => ({
      ...state,
      status: newStatus,
    })
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Optimistically update UI
    addOptimistic('loading')

    // Create FormData
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    // Submit form
    const result = await submitContactForm(formState, formData)
    setFormState(result)

    // Reset form on success
    if (result.status === 'success') {
      reset()
      setTimeout(() => {
        setFormState({ status: 'idle' })
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a question or want to work together? Send us a message!
          </p>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-card p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg"
        >
          {/* Success/Error messages */}
          {optimisticState.status === 'success' && (
            <div className="flex items-center space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400 animate-slide-down">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <p>{formState.message}</p>
            </div>
          )}

          {optimisticState.status === 'error' && (
            <div className="flex items-center space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400 animate-slide-down">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p>{formState.message}</p>
            </div>
          )}

          {/* Name field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-background border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-background border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subject field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
              Subject
            </label>
            <input
              {...register('subject')}
              type="text"
              id="subject"
              className="w-full px-4 py-3 bg-background border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              placeholder="Project inquiry"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={6}
              className="w-full px-4 py-3 bg-background border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
              placeholder="Tell us about your project..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={optimisticState.status === 'loading'}
            className="w-full inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {optimisticState.status === 'loading' ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
