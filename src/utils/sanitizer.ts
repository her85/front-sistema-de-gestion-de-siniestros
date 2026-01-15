import DOMPurify from 'dompurify'
import validator from 'validator'
import { parseISO, isValid, isBefore, isAfter, subYears, addYears } from 'date-fns'

/**
 * Funciones de sanitización usando librerías especializadas
 */

/**
 * Sanitiza cadenas de texto usando DOMPurify y validator
 * @param input - Cadena a sanitizar
 * @returns Cadena sanitizada
 */
export function sanitizeString(input: string | null | undefined): string {
  if (!input || typeof input !== 'string') {
    return ''
  }

  // Usar DOMPurify para sanitizar HTML y prevenir XSS
  const purified = DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [], // No permitir tags HTML
    ALLOWED_ATTR: [] // No permitir atributos
  })

  // Usar validator para escape adicional y normalización
  return validator.escape(purified)
    .trim()
    .replace(/\s+/g, ' ') // Normalizar espacios múltiples
}

/**
 * Sanitiza y valida fechas usando date-fns
 * @param dateInput - Fecha como string
 * @returns Fecha ISO válida o null si es inválida
 */
export function sanitizeDate(dateInput: string | null | undefined): string | null {
  if (!dateInput || typeof dateInput !== 'string') {
    return null
  }

  const sanitizedInput = sanitizeString(dateInput)
  
  // Usar validator para validar formato de fecha
  if (!validator.isDate(sanitizedInput)) {
    return null
  }

  try {
    const date = parseISO(sanitizedInput)
    
    // Verificar que sea una fecha válida usando date-fns
    if (!isValid(date)) {
      return null
    }

    const today = new Date()
    const maxDate = addYears(today, 1) // Máximo 1 año en el futuro
    const minDate = subYears(today, 100) // Mínimo 100 años atrás
    
    // Validar rango de fechas usando date-fns
    if (isAfter(date, maxDate) || isBefore(date, minDate)) {
      return null
    }

    return date.toISOString()
  } catch {
    return null
  }
}

/**
 * Sanitiza números usando validator
 * @param input - Valor numérico
 * @returns Número sanitizado o null si es inválido
 */
export function sanitizeNumber(input: string | number | null | undefined): number | null {
  if (input === null || input === undefined) {
    return null
  }

  const stringValue = String(input)
  
  // Usar validator para validar números
  if (!validator.isNumeric(stringValue, { no_symbols: false })) {
    return null
  }

  const numValue = parseFloat(stringValue)
  
  if (isNaN(numValue) || !isFinite(numValue)) {
    return null
  }

  return numValue
}

/**
 * Sanitiza URLs usando validator
 * @param input - URL a sanitizar
 * @returns URL sanitizada o null si es inválida
 */
export function sanitizeUrl(input: string | null | undefined): string | null {
  if (!input || typeof input !== 'string') {
    return null
  }

  const sanitizedInput = sanitizeString(input)
  
  // Usar validator para validar URLs
  if (!validator.isURL(sanitizedInput, {
    protocols: ['http', 'https'],
    require_protocol: true,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false
  })) {
    return null
  }

  return sanitizedInput
}

/**
 * Sanitiza emails usando validator
 * @param input - Email a sanitizar
 * @returns Email sanitizado o null si es inválido
 */
export function sanitizeEmail(input: string | null | undefined): string | null {
  if (!input || typeof input !== 'string') {
    return null
  }

  const sanitizedInput = sanitizeString(input).toLowerCase()
  
  // Usar validator para validar emails
  if (!validator.isEmail(sanitizedInput, {
    allow_utf8_local_part: false,
    require_tld: true,
    allow_ip_domain: false,
    domain_specific_validation: true
  })) {
    return null
  }

  // Normalizar email usando validator
  return validator.normalizeEmail(sanitizedInput) || null
}

/**
 * Valida longitud de string usando validator
 * @param input - String a validar
 * @param minLength - Longitud mínima
 * @param maxLength - Longitud máxima
 * @returns true si es válida, false si no
 */
export function validateStringLength(
  input: string | null | undefined,
  minLength: number = 1,
  maxLength: number = 1000
): boolean {
  if (!input || typeof input !== 'string') {
    return false
  }

  return validator.isLength(input.trim(), { min: minLength, max: maxLength })
}

/**
 * Sanitiza objetos recursivamente aplicando las funciones de sanitización apropiadas
 * @param obj - Objeto a sanitizar
 * @returns Objeto sanitizado
 */
export function sanitizeObject<T>(obj: T): T {
  if (obj === null || obj === undefined) {
    return obj
  }

  if (typeof obj === 'string') {
    return sanitizeString(obj) as T
  }

  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      return obj.map(item => sanitizeObject(item)) as T
    }

    const sanitizedObj = {} as T
    for (const [key, value] of Object.entries(obj)) {
      (sanitizedObj as Record<string, unknown>)[key] = sanitizeObject(value)
    }
    return sanitizedObj
  }

  return obj
}

/**
 * Validaciones adicionales usando validator
 */
export const validators = {
  isAlpha: (str: string) => validator.isAlpha(str),
  isAlphanumeric: (str: string) => validator.isAlphanumeric(str),
  isDecimal: (str: string) => validator.isDecimal(str),
  isMobilePhone: (str: string) => validator.isMobilePhone(str),
  isPostalCode: (str: string, locale: validator.PostalCodeLocale) => validator.isPostalCode(str, locale),
  isUUID: (str: string) => validator.isUUID(str),
  contains: (str: string, seed: string) => validator.contains(str, seed),
  matches: (str: string, pattern: RegExp) => validator.matches(str, pattern),
}
