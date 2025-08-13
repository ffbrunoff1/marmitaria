import { motion } from 'framer-motion'
import { Heart, MapPin, Phone, Mail, Clock, ChefHat, Instagram, Facebook, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Cardápio', href: '#services' },
    { name: 'Contato', href: '#contact' }
  ]

  const menuCategories = [
    'Marmitas Tradicionais',
    'Marmitas Fitness',
    'Marmitas Vegetarianas',
    'Marmitas Premium'
  ]

  const contactInfo = [
    { icon: Phone, text: '(11) 99999-9999', link: 'https://wa.me/5511999999999' },
    { icon: Mail, text: 'contato@marmitaria.com.br', link: 'mailto:contato@marmitaria.com.br' },
    { icon: MapPin, text: 'Entregamos em toda a cidade', link: '#' },
    { icon: Clock, text: 'Seg a Sáb: 11h às 22h', link: '#' }
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Facebook, href: '#', name: 'Facebook' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Marmitaria</h3>
                <span className="text-primary-400 font-medium">Sabor & Nutrição</span>
              </div>
            </motion.div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Levamos amor e sabor até sua mesa através de marmitas artesanais preparadas 
              com ingredientes frescos e muito carinho. Transformamos refeições em momentos especiais.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {(() => { const Icon = social.icon; return <Icon className="w-5 h-5" />; })()}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Navegação</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Nosso Cardápio</h4>
            <ul className="space-y-3">
              {menuCategories.map((category, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => scrollToSection('#services')}
                    className="text-gray-300 hover:text-secondary-400 transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {category}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Contato</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={info.link}
                    target={info.link.includes('wa.me') ? '_blank' : '_self'}
                    rel={info.link.includes('wa.me') ? 'noopener noreferrer' : ''}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-gray-700 rounded-lg group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-300">
                      {(() => { const Icon = info.icon; return <Icon className="w-4 h-4" />; })()}
                    </div>
                    <span className="text-sm">{info.text}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 p-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl border border-primary-500/30"
            >
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="font-semibold text-white">Pedidos pelo WhatsApp</span>
              </div>
              <p className="text-gray-300 text-sm">
                Faça seu pedido direto pelo WhatsApp e receba sua marmita quentinha!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-gray-700"
      >
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="text-gray-400 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <p>
                © {currentYear} Marmitaria. Todos os direitos reservados. 
                Feito com <Heart className="w-4 h-4 text-red-400 inline mx-1" /> para você.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center space-x-2 text-gray-400 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span>Criado com</span>
              <motion.a
                href="https://papum.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors duration-300 font-medium flex items-center"
                whileHover={{ y: -1 }}
              >
                Papum <ExternalLink className="w-3 h-3 ml-1" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}