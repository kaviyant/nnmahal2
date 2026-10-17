export const contactConfig = {
  phoneDigits: '9789439018',
  countryCode: '91',
  displayPhone: '+91 97894 39018',
  phoneUrl: 'tel:+919789439018',
  whatsappMessage: 'Hi N.N Mahal! I am interested in your wedding hall for an upcoming event. Could you please share the available facilities, pricing, and booking details?',
  get whatsappUrl() {
    return `https://wa.me/91${this.phoneDigits}?text=${encodeURIComponent(this.whatsappMessage)}`
  },
}
