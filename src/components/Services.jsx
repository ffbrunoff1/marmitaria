import { motion } from 'framer-motion'
import { Utensils, Clock, Truck, Heart, Star, ChefHat, Leaf, Award } from 'lucide-react'

export default function Services() {
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

  const menuCategories = [
    {
      title: 'Marmitas Tradicionais',
      description: 'Pratos caseiros que lembram o gostinho da casa da vovó',
      icon: Heart,
      color: 'text-red-500',
      bg: 'bg-red-50',
      items: [
        'Arroz, feijão, bife acebolado e salada',
        'Frango grelhado com legumes no vapor',
        'Peixe assado com purê de batata',
        'Carne de panela com mandioquinha'
      ]
    },
    {
      title: 'Marmitas Fitness',
      description: 'Opções saudáveis para quem cuida da forma física',
      icon: Leaf,
      color: 'text-green-500',
      bg: 'bg-green-50',
      items: [
        'Frango grelhado com quinoa e brócolis',
        'Salmão com batata doce e aspargos',
        'Carne magra com arroz integral',
        'Omelete de claras com vegetais'
      ]
    },
    {
      title: 'Marmitas Vegetarianas',
      description: 'Sabores incríveis sem ingredientes de origem animal',
      icon: Leaf,
      color: 'text-green-600',
      bg: 'bg-green-50',
      items: [
        'Lasanha de berinjela com ricota',
        'Curry de grão-de-bico com arroz',
        'Hambúrguer de lentilha com salada',
        'Risotto de cogumelos e ervas'
      ]
    },
    {
      title: 'Marmitas Premium',
      description: 'Experiências gastronômicas especiais para ocasiões únicas',
      icon: Award,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      items: [
        'Picanha grelhada com risotto de camarão',
        'Salmão com crosta de ervas finas',
        'Cordeiro com ratatouille provençal',
        'Pato confit com batatas rústicas'
      ]
    }
  ]

  const features = [
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Receba sua marmita quentinha em até 45 minutos',
      color: 'text-blue-500'
    },
    {
      icon: ChefHat,
      title: 'Chef Especializado',
      description: 'Pratos preparados por chef com anos de experiência',
      color: 'text-purple-500'
    },
    {
      icon: Truck,
      title: 'Entrega Gratuita',
      description: 'Frete grátis para pedidos acima de R$ 30,00',
      color: 'text-orange-500'
    },
    {
      icon: Star,
      title: 'Avaliação 5 Estrelas',
      description: 'Reconhecimento pela qualidade e sabor únicos',
      color: 'text-yellow-500'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full text-sm font-medium text-primary-700 mb-6"
          >
            <Utensils className="w-4 h-4 mr-2" />
            Nosso Cardápio
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Sabores incríveis</span>, praticidade{' '}
            <span className="gradient-text">máxima</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra nossa seleção especial de marmitas preparadas com ingredientes frescos 
            e muito amor. Cada refeição é uma experiência única de sabor e nutrição.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {menuCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 custom-shadow hover-lift"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-2xl ${category.bg}`}>
                  {(() => {
                    const Icon = category.icon;
                    return <Icon className={`w-8 h-8 ${category.color}`} />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={scrollToContact}
                className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Peça Agora
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Por que nossos clientes nos <span className="gradient-text">amam</span>?
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vamos além do sabor. Oferecemos uma experiência completa de qualidade e conveniência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-gray-50 to-white rounded-2xl flex items-center justify-center mx-auto mb-6 custom-shadow group-hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {(() => { const Icon = feature.icon; return <Icon className={`w-10 h-10 ${feature.color}`} />; })()}
              </motion.div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para experimentar?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Garante já a sua marmita e descubra a diferença que o amor faz na cozinha. 
              Sabor e saúde entregues na sua mesa!
            </p>
            
            <motion.button
              onClick={scrollToContact}
              className="px-10 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChefHat className="w-5 h-5 mr-2" />
              Fazer Pedido Agora
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}