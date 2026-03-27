import { Injectable, signal } from '@angular/core'
import { Product } from '../models/product.model'
import { Category } from '../models/category.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Спортивные добавки' },
    { id: 2, name: 'Бутылки для воды' },
    { id: 3, name: 'Шейкеры' },
    { id: 4, name: 'Спортивная одежда' }
  ]

  private productsSignal = signal<Product[]>([
    // Category 1: Спортивные добавки (5 products)
    {
      id: 1,
      name: 'Креатин Mutant Creakong+ шейкер нейтральный 300 г',
      description: 'Креатиновый порошок для набора мышечной массы и повышения силы. Нейтральный вкус, упаковка 300 г, часто продаётся в комплекте с шейкером. Подходит спортсменам и любителям силовых тренировок.',
      price: 8400,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc4/pd4/52040597.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/pd4/52040597.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/peb/pe0/52040600.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcf/pe0/52040601.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kreatin-mutant-creakong-sheiker-neitral-nyi-300-g-142224134/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Креатин Kevin Levrone Gold Creatine нейтральный 300 г',
      description: 'Gold Creatine от Kevin Levrone — 300 г моногидрата креатина без вкуса. Предназначен для повышения силы и улучшения восстановления после тренировок. Подходит для периодического и регулярного приёма спортсменами.',
      price: 8500,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/h2d/85541705121822.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/h2d/85541705121822.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc1/p73/75702291.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6c/p73/75702294.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kreatin-kevin-levrone-gold-creatine-neitral-nyi-300-g-117800576/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Креатин Qazprotein Creatine Monohydrate нейтральный 150 г',
      description: 'Креатин моногидрат Qazprotein объёмом 150 г с нейтральным вкусом. Компактная упаковка для тех, кто пробует или часто в поездках. Помогает в восстановлении и увеличении мышечной силы при регулярных тренировках.',
      price: 4190,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5b/h5e/85213487431710.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kreatin-qazprotein-creatine-monohydrate-neitral-nyi-150-g-112792116/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Креатин YummyLab Creatine monohydrate нейтральный 300 г',
      description: 'YummyLab Creatine Monohydrate — 300 г чистого моногидрата креатина без вкуса. Разработан для повышения силовых показателей и ускорения восстановления. Подходит для циклов загрузки и поддерживающего приёма.',
      price: 6374,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p57/p04/86602276.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p57/p04/86602276.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p0c/86475803.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p0c/86475805.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa7/p0c/86475806.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kreatin-yummylab-creatine-monohydrate-neitral-nyi-300-g-117779595/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'Детокс комплекс Snello Detox Tea 150 г',
      description: 'Чайный детокс-комплекс Snello, упаковка 150 г. Продукт позиционируется как поддерживающий программу похудения и очищения организма. Содержит набор трав и компонентов для ежедневного употребления в течение курса.',
      price: 8000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0e/pde/47947972.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0e/pde/47947972.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa5/pda/47947973.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3b/pd7/47947974.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/detoks-kompleks-snello-detox-tea-150-g-137412413/',
      likes: 0,
      categoryId: 1
    },

    // Category 2: Бутылки для воды (5 products)
    {
      id: 6,
      name: 'Бутылка для воды 2 литра 1007 2000 мл голубой',
      description: 'Объёмная пластиковая бутылка для воды объёмом 2 литра, приятного голубого оттенка. Идеальна для воды и напитков в течение дня, удобна для спортивных занятий и походов. Имеет прочную крышку и ручку для переноски.',
      price: 1284,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h68/h3d/69203311656990.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h68/h3d/69203311656990.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/butylka-dlja-vody-2-litra-1007-2000-ml-goluboi-108970626/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'Spirit Fitness 650 мл черный',
      description: 'Спортивная бутылка Spirit Fitness объёмом 650 мл в чёрном цвете. Компактный и удобный вариант для спортзала и повседневного использования. Устойчива к ударам, оснащена герметичной крышкой.',
      price: 1203,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/he3/85720367267870.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h57/he3/85720367267870.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/butylka-spirit-fitness-spirit-650-650-ml-chernyi-115705684/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'Бутылка для воды 780 мл черный',
      description: 'Удобная бутылка для воды объёмом 780 мл в чёрном цвете. Подходит для тренировок и повседневного использования благодаря оптимальному объёму и компактной форме. Оснащена крышкой с носиком для комфортного питья.',
      price: 2013,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h96/hd8/65857060110366.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h96/hd8/65857060110366.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/butylka-dlja-vody-780-ml-chernyi-107614270/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'FLOW спортивная CILOCK SPORTS черный 1700 мл',
      description: 'Спортивная бутылка CILOCK SPORTS объёмом 1200 мл в черном цвете. Лёгкая и прочная, с удобной ручкой для переноски. Подходит для тренировок, туризма и повседневного использования.',
      price: 1890,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/h4e/86535982907422.jpg?format=gallery-medium',
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h7a/h4e/86535982907422.jpg?format=gallery-medium",
        'https://resources.cdn-kaspi.kz/img/m/p/h61/h80/86535982940190.jpg?format=gallery-medium',
        "https://resources.cdn-kaspi.kz/img/m/p/ha3/h25/86535982972958.jpg?format=gallery-medium"
      ],
      link: 'https://kaspi.kz/shop/p/flow-sportivnaja-cilock-sports-chernyi-1700-ml-112518040',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'Бутылка для воды BPA Free 500 мл синяя',
      description: 'Компактная водная бутылка BPA Free объёмом 500 мл в синем цвете. Безопасный материал, не содержит вредные вещества. Идеальна для работы, учёбы и лёгких тренировок.',
      price: 950,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p04/p22/17215862.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p04/p22/17215862.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/butylka-butylka-dlja-vody-500-ml-sinii-132573402/',
      likes: 0,
      categoryId: 2
    },

    // Category 3: Шейкеры (5 products)
    {
      id: 11,
      name: 'Шейкер SPIDER BOTTLE 630643314 500 мл черный',
      description: 'Шейкер SPIDER BOTTLE объёмом 500 мл в чёрном цвете. Лёгкий пластиковый шейкер с крышкой и носиком, удобен для смешивания спортивных добавок. Компактный и недорогой вариант для повседневного использования.',
      price: 840,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0d/85637868421150.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0d/85637868421150.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4d/h31/85637868814366.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6c/hc9/85637868879902.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6a/h60/85637868945438.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sheiker-spider-bottle-630643314-500-ml-chernyi-118074205/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Шейкер NextGen UNIVERSAL 600 мл черный',
      description: 'Универсальный шейкер NextGen объёмом 600 мл в чёрном цвете. Оснащён уплотнителем и носиком для удобного употребления напитков и протеиновых коктейлей. Подходит для ежедневного использования в зале и дома.',
      price: 1690,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5f/p35/54648240.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p5f/p35/54648240.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sheiker-nextgen-universal-600-ml-chernyi-142962875/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Шейкер BlenderBottle 820 мл зеленый',
      description: 'Качественный шейкер BlenderBottle объёмом 820 мл. Содержит мешалку-шарик для идеального смешивания. Прочная конструкция и удобная крышка с защитой от протеканий.',
      price: 2450,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/hee/86113508622366.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h70/hee/86113508622366.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h50/h56/86113508687902.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sheiker-blenderbottle-820-ml-belyi-118074230/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Шейкер BlenderBottle 820 мл белый',
      description: 'Премиальный шейкер объёмом 820 мл в белом цвете. Надёжная конструкция с герметичной крышкой. Подходит для интенсивного использования в спортзале.',
      price: 1920,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h92/85997361332254.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h92/85997361332254.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sheiker-premium-shake-700-ml-zelenyi-118074245/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'Шейкер SPIDER BOTTLE 630643314 500 мл черный',
      description: 'Шейкер SPIDER BOTTLE объёмом 500 мл в чёрном цвете. Лёгкий пластиковый шейкер с крышкой и носиком, удобен для смешивания спортивных добавок. Компактный и недорогой вариант для повседневного использования.',
      price: 840,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0d/85637868421150.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0d/85637868421150.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4d/h31/85637868814366.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6c/hc9/85637868879902.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6a/h60/85637868945438.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sheiker-spider-bottle-630643314-500-ml-chernyi-118074205/',
      likes: 0,
      categoryId: 3
    },

    // Category 4: Спортивная одежда (5 products)
    {
      id: 16,
      name: 'Спортивная футболка ADIDAS Performance черная',
      description: 'Классическая спортивная футболка ADIDAS Performance в чёрном цвете. Изготовлена из дышащего материала Climalite, который впитывает влагу. Идеальна для тренировок и повседневного ношения.',
      price: 3890,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h95/85118590844958.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4e/h95/85118590844958.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h19/hd0/85118591107102.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/futbolka-adidas-nadpis-ic7438-chernyi-xs-116480925/?srsltid=AfmBOoqPSbpptIVK4Ke1MH9SXsIdMSJExiQ-9YSsJwNhhyWfv88yFhZz&hasVariants=true',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Спортивные штаны NIKE Flex серые',
      description: 'Комфортные спортивные штаны NIKE Flex в сером цвете. Сделаны из Dri-FIT ткани для максимальной вентиляции. Идеальны для тренировок и отдыха.',
      price: 5290,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/p22/97081452.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd9/p22/97081452.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sportivnye-brjuki-nike-cw6907-071-seryi-xl-105793590/?srsltid=AfmBOopZKdYqr_-gTqjGu3ORC8mCDPyv0-7ElEZ_7JwoSVMCelRAw_Ry',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Кроссовки PUMA Running красные',
      description: 'Лёгкие беговые кроссовки PUMA Running в красном цвете. Оснащены амортизирующей подошвой Cushioning. Подходят для бега и активного образа жизни.',
      price: 31495,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd3/p1d/66871763.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd3/p1d/66871763.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p46/p1d/66871768.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/krossovki-puma-cell-thrill-dash-311728-05-temno-sinii-39-146307113/?c=750000000&hasVariants=true',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Спортивный бюстгальтер SHOCK ABSORBER синий',
      description: 'Поддерживающий спортивный бюстгальтер SHOCK ABSORBER в черном цвете. Обеспечивает максимальный комфорт и поддержку. Подходит для занятий фитнесом.',
      price: 4290,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/haf/hf8/81197507215390.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/haf/hf8/81197507215390.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/bjustgal-ter-yuzhaolin-4847-chernyi-44-110792519/?srsltid=AfmBOorD_cKzKyamRfjYN2l-6Xi-5iQrfDA_LyQu9zbeZWupDhoSfe_t',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Спортивный костюм Umbro темно-синий',
      description: 'Мощный костюмғой мынау деген, ал өкінбейсің брат',
      price: 21899,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p39/p5d/13087712.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p39/p5d/13087712.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sportivnyi-kostjum-umbro-a1005-temno-sinii-m-131395643/?c=750000000',
      likes: 0,
      categoryId: 4
    }
  ])

  getCategories(): Category[] {
    return this.categories
  }

  getProducts(): Product[] {
    return this.productsSignal()
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.productsSignal().filter(p => p.categoryId === categoryId)
  }

  getProductById(id: number): Product | undefined {
    return this.productsSignal().find(p => p.id === id)
  }

  likeProduct(id: number): void {
    const products = this.productsSignal()
    const product = products.find(p => p.id === id)
    if (product) {
      product.likes++
      this.productsSignal.set([...products])
    }
  }

  deleteProduct(id: number): void {
    const products = this.productsSignal()
    const filtered = products.filter(p => p.id !== id)
    this.productsSignal.set(filtered)
  }
}
