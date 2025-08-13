import { motion } from 'framer-motion'
import { Star, Clock, Truck, ChefHat, Heart, Award } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const features = [
    { icon: Clock, text: 'Entrega rápida', color: 'text-blue-600' },
    { icon: Heart, text: 'Feito com amor', color: 'text-red-500' },
    { icon: Award, text: 'Qualidade premium', color: 'text-yellow-600' }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,104,32,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full text-sm font-medium text-primary-700 mb-6"
            >
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Refeições premiadas na região
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="gradient-text">Nutrição</span> e{' '}
              <span className="gradient-text">sabor</span>{' '}
              <span className="text-gray-800">em cada</span>{' '}
              <span className="gradient-text">marmita!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
            >
              Transforme suas refeições diárias em verdadeiros banquetes! Marmitas artesanais, 
              feitas com ingredientes frescos e muito carinho, entregues quentinhas na sua porta.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold text-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChefHat className="w-5 h-5 mr-2" />
                Peça Agora Sua Marmita
              </motion.button>

              <motion.button
                onClick={scrollToServices}
                className="px-8 py-4 border-2 border-primary-500 text-primary-600 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Truck className="w-5 h-5 mr-2" />
                Ver Cardápio
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-gray-600 font-medium">{feature.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                className="bg-white rounded-3xl p-8 custom-shadow hover-lift"
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    className="bg-gradient-to-br from-primary-100 to-orange-100 rounded-2xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ChefHat className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-800 mb-2">Receitas</h3>
                    <p className="text-sm text-gray-600">Tradicionais e saborosas</p>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-secondary-100 to-green-100 rounded-2xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Heart className="w-12 h-12 text-secondary-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-800 mb-2">Amor</h3>
                    <p className="text-sm text-gray-600">Em cada ingrediente</p>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Clock className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-800 mb-2">Pontualidade</h3>
                    <p className="text-sm text-gray-600">Sempre no horário</p>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Award className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-800 mb-2">Qualidade</h3>
                    <p className="text-sm text-gray-600">Ingredientes premium</p>
                  </motion.div>
                </div>

                <motion.div
                  className="mt-8 p-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-white text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl font-bold mb-2">🍽️ +1000</h3>
                  <p className="text-primary-100">Marmitas entregues com amor</p>
                </motion.div>
              </motion.div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full opacity-20 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}