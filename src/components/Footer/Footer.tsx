'use client'

import BrandComponent from './Brand'
import ContactComponent from './Contact'
import CopyrightComponent from './Copyright'
import LayoutFooter from './Layout'
import NewsletterComponent from './NewsLettter'

export function Footer() {
  return (
    <LayoutFooter>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <BrandComponent />
        {/* Contact */}
        <ContactComponent />
        {/* Newsletter */}
        <NewsletterComponent />
      </div>

      <CopyrightComponent />
    </LayoutFooter>
  )
}
