import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

export default function BrandComponent() {
  const t = useTranslations('Footer')

  return (
    <div>
      <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6">About</h3>
      <Link href="/" className="flex gap-2 sm:gap-3">
        <img
          alt="Logo"
          className="object-contain mb-5 w-48 sm:w-48"
          src="https://s3.nevaobjects.id/image-dev/uploads/20260121141804.png"
        />
      </Link>

      <p className="text-gray-600 dark:text-gray-400 mb-6">{t('about')}</p>
      <div className="flex gap-4">
        <a
          href="https://www.instagram.com/pakargaming.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-500 hover:text-white transition-all"
        >
          <FaInstagram className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}
