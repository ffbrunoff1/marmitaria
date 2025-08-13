import { motion } from 'framer-motion'
import { Heart, Users, Clock, Leaf, Shield, Star } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Feito com Amor',
      description: 'Cada marmita é preparada com carinho e dedicação, como se fosse para nossa própria família.',
      color: 'text-red-500',
      bg: 'bg-red-50'
    },
    {
      icon: Leaf,
      title: 'Ingredientes Frescos',
      description: 'Selecionamos os melhores ingredientes diariamente para garantir sabor e qualidade.',
      color: 'text-green-500',
      bg: 'bg-green-50'
    },
    {
      icon: Shield,
      title: 'Higiene Total',
      description: 'Seguimos rigorosos protocolos de higiene e segurança alimentar em nossa cozinha.',
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      icon: Clock,
      title: 'Pontualidade',
      description: 'Respeitamos seu tempo! Entregas sempre pontuais para não atrasar sua rotina.',
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    }
  ]

  const stats = [
    { number: '5+', label: 'Anos de experiência', icon: Star },
    { number: '1000+', label: 'Clientes satisfeitos', icon: Users },
    { number: '50+', label: 'Pratos diferentes', icon: Heart },
    { number: '100%', label: 'Ingredientes frescos', icon: Leaf }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            <Heart className="w-4 h-4 mr-2 text-red-500" />
            Nossa História
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Transformando</span> refeições em{' '}
            <span className="gradient-text">momentos especiais</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nascemos da paixão por cozinhar e do desejo de levar comida caseira de qualidade 
            para pessoas que valorizam sabor, nutrição e praticidade em suas vidas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="bg-white rounded-3xl p-8 custom-shadow hover-lift"
                whileHover={{ scale: 1.02 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Nossa Missão</h3>
                      <p className="text-primary-600 font-medium">Alimentar com amor</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    Acreditamos que uma boa refeição é muito mais que nutrição - é um momento 
                    de prazer, cuidado e conexão. Por isso, preparamos cada marmita como se 
                    fosse para nossa própria família.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-orange-50 rounded-xl">
                      <div className="text-2xl font-bold text-primary-600 mb-1">5+</div>
                      <div className="text-sm text-gray-600">Anos de experiência</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-secondary-50 to-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-secondary-600 mb-1">100%</div>
                      <div className="text-sm text-gray-600">Satisfação garantida</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Por que escolher a <span className="gradient-text">Marmitaria</span>?
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Combinamos tradição culinária, ingredientes selecionados e muito amor para 
                criar refeições que nutrem o corpo e aquecem o coração.
              </p>
            </div>

            <div className="grid gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className={`p-3 rounded-xl ${value.bg}`}>
                      <Icon className={`w-6 h-6 ${value.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Números que falam por si
            </h3>
            <p className="text-xl text-primary-100">
              A confiança dos nossos clientes é nossa maior conquista
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-100 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}