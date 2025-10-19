import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { News, NewsFilter, NewsResponse } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private mockNews: News[] = [
    {
      id: 1,
      title: 'Luxor University Participates in Global Marathon to Raise Awareness Against Polio',
      titleAr: 'جامعة الأقصر تشارك في الماراثون العالمي للتوعية ضد شلل الأطفال',
      description: 'Under the patronage of Dr. Sabrin Abdel-Galil, President of Luxor University, the university participated this morning in the "Race to End Polio" marathon under the slogan "Sports in the Service of Humanity," aiming to raise awareness about the importance of vaccination against polio. Hundreds of students, civil society representatives, and resident tourists joined the event.',
      descriptionAr: 'تحت رعاية د. صابرين عبد الجليل رئيس جامعة الأقصر، شاركت الجامعة صباح اليوم في ماراثون "السباق لإنهاء شلل الأطفال" تحت شعار "الرياضة في خدمة الإنسانية"، بهدف التوعية بأهمية التطعيم ضد شلل الأطفال.',
      content: `Under the patronage of **Prof. Dr. Sabrin Abdel-Galil**, President of Luxor University, the university participated this morning in the "Race to End Polio" marathon under the slogan "Sports in the Service of Humanity," aiming to raise awareness about the importance of vaccination against polio.

The event witnessed massive participation from hundreds of students, civil society representatives, and resident tourists who joined the marathon that started from the Luxor Temple and extended along the Nile Corniche, passing through the most important archaeological and tourist landmarks in the city.

**Prof. Dr. Sabrin Abdel-Galil** emphasized that this participation comes within the framework of the university's commitment to its social responsibility and its role in serving the community, noting that sports is an effective means of spreading health awareness and promoting the values of cooperation and solidarity among community members.

The marathon included various awareness activities about the importance of vaccination against polio, with the distribution of educational brochures and the organization of medical consultations for participants. The event also featured artistic performances that highlighted the cultural heritage of Luxor and its ancient civilization.

This initiative is part of the global efforts to eradicate polio completely, as Luxor University continues to support international health campaigns and contribute to achieving sustainable development goals in the field of public health.`,
      contentAr: 'تحت رعاية أ.د. صابرين عبد الجليل رئيس جامعة الأقصر، شاركت الجامعة صباح اليوم في ماراثون "السباق لإنهاء شلل الأطفال" تحت شعار "الرياضة في خدمة الإنسانية"، بهدف التوعية بأهمية التطعيم ضد شلل الأطفال...',
      imageUrl: './assets/new1.jpg',
      images: [
        './assets/new1.jpg',
        './assets/new6.jpg',
        './assets/new7.jpg',
      ],
      date: new Date('2025-01-12'),
      author: 'Dr. Ahmed Hassan',
      authorAr: 'د. أحمد حسن',
      category: 'University Events',
      categoryAr: 'فعاليات الجامعة',
      isFeatured: true,
      isBreaking: true,
      isTrending: true,
      views: 1250,
      tags: ['Marathon', 'Health', 'Community Service', 'Polio Awareness'],
      tagsAr: ['ماراثون', 'صحة', 'خدمة المجتمع', 'التوعية بشلل الأطفال']
    },
    {
      id: 2,
      title: 'Awareness Seminar on the Dark Web and Digital Life at the Faculty of Fine Arts',
      titleAr: 'ندوة توعوية حول الشبكة المظلمة والحياة الرقمية بكلية الفنون الجميلة',
      description: 'Under the patronage of Prof. Dr. Sabrin Abdel-Galil, President of Luxor University, the Community Service and Environmental Development Sector, supervised by Dr. Hanaa Hamed and in cooperation with the General Administration of Information Systems and Digital Transformation, organized a seminar on the "Dark Web and Digital Life" at the Faculty of Fine Arts.',
      descriptionAr: 'تحت رعاية أ.د. صابرين عبد الجليل رئيس جامعة الأقصر، نظم قطاع خدمة المجتمع وتنمية البيئة بإشراف د. هناء حامد وبالتعاون مع الإدارة العامة لنظم المعلومات والتحول الرقمي، ندوة حول "الشبكة المظلمة والحياة الرقمية".',
      content: `Under the patronage of **Prof. Dr. Sabrin Abdel-Galil**, President of Luxor University, the Community Service and Environmental Development Sector, supervised by **Dr. Hanaa Hamed** and in cooperation with the General Administration of Information Systems and Digital Transformation, organized a seminar on the "Dark Web and Digital Life" at the Faculty of Fine Arts, under the supervision of **Dr. Ahmed Mohy**, Dean of the Faculty.

The seminar aimed to raise awareness among students and faculty members about the dangers of the dark web and how to protect themselves while navigating the digital world. The event featured presentations by cybersecurity experts who discussed the latest trends in digital threats and protection methods.

**Dr. Hanaa Hamed** emphasized the importance of digital literacy in today's world, noting that understanding both the opportunities and risks of digital technology is crucial for academic and personal success. The seminar covered topics including:

- Understanding the structure of the internet and the dark web
- Recognizing and avoiding digital threats
- Best practices for online privacy and security
- The role of digital citizenship in academic environments

The event was attended by over 200 students and faculty members from various departments, reflecting the high level of interest in digital security topics. Interactive workshops were conducted to provide hands-on experience with security tools and techniques.

This initiative is part of Luxor University's comprehensive digital transformation strategy, which aims to create a safe and informed digital environment for all members of the university community.`,
      contentAr: 'تحت رعاية أ.د. صابرين عبد الجليل رئيس جامعة الأقصر، نظم قطاع خدمة المجتمع وتنمية البيئة بإشراف د. هناء حامد وبالتعاون مع الإدارة العامة لنظم المعلومات والتحول الرقمي، ندوة حول "الشبكة المظلمة والحياة الرقمية"...',
      imageUrl: './assets/new2.jpg',
      images: [
        './assets/new2.jpg',
        './assets/new9.jpg',
        './assets/new8.jpg',
      ],
      date: new Date('2025-01-11'),
      author: 'Dr. Hanaa Hamed',
      authorAr: 'د. هناء حامد',
      category: 'Digital Security',
      categoryAr: 'الأمن الرقمي',
      isFeatured: false,
      isBreaking: false,
      isTrending: true,
      views: 890,
      tags: ['Digital Security', 'Dark Web', 'Cybersecurity', 'Student Awareness'],
      tagsAr: ['الأمن الرقمي', 'الشبكة المظلمة', 'الأمن السيبراني', 'توعية الطلاب']
    },
    {
      id: 3,
      title: 'Luxor University Supports Expat Students Through Psychological Support Initiative',
      titleAr: 'جامعة الأقصر تدعم الطلاب المغتربين من خلال مبادرة الدعم النفسي',
      description: 'Under the patronage of Prof. Dr. Sabrin Gaber Abdel-Galil, President of Luxor University, the Community Service and Environmental Development Sector launched the first activities of the "Psychological Support for Expat Students" initiative with an awareness seminar at the female student dormitory in Tiba City.',
      descriptionAr: 'تحت رعاية أ.د. صابرين جابر عبد الجليل رئيس جامعة الأقصر، أطلق قطاع خدمة المجتمع وتنمية البيئة الأنشطة الأولى لمبادرة "الدعم النفسي للطلاب المغتربين" بندوة توعوية بمدينة الطالبات بمدينة طيبة.',
      content: `Under the patronage of **Prof. Dr. Sabrin Gaber Abdel-Galil**, President of Luxor University, the Community Service and Environmental Development Sector launched the first activities of the "Psychological Support for Expat Students" initiative with an awareness seminar at the female student dormitory in Tiba City.

The seminar was presented by **Prof. Dr. Hany Abdel-Fattah**, Director of the Psychological Support Office, and **Assoc. Prof. Dr. Reda Atallah**, University Community Outreach Coordinator, with the attendance of **Dr. Ahmed Youssef**, General Director of University Dormitories.

The initiative aims to provide comprehensive psychological support to students who are away from their families and hometowns, helping them adapt to university life and overcome the challenges they may face during their academic journey.

**Prof. Dr. Hany Abdel-Fattah** explained that the program includes:

- Individual and group counseling sessions
- Stress management workshops
- Social integration activities
- Peer support networks
- Crisis intervention services

The seminar covered important topics such as managing homesickness, building healthy relationships, academic stress management, and developing coping strategies for various life challenges.

**Dr. Reda Atallah** emphasized the university's commitment to creating a supportive environment for all students, noting that mental health is as important as academic achievement. The initiative will expand to include male dormitories and off-campus students in the coming weeks.

This program reflects Luxor University's holistic approach to student welfare and its recognition of the unique challenges faced by students studying away from home.`,
      contentAr: 'تحت رعاية أ.د. صابرين جابر عبد الجليل رئيس جامعة الأقصر، أطلق قطاع خدمة المجتمع وتنمية البيئة الأنشطة الأولى لمبادرة "الدعم النفسي للطلاب المغتربين"...',
      imageUrl: './assets/new3.jpg',
      images: [
        './assets/new3.jpg',
        './assets/new3.jpg',
        './assets/new3.jpg',
      ],
      date: new Date('2025-01-10'),
      author: 'Dr. Hany Abdel-Fattah',
      authorAr: 'د. هاني عبد الفتاح',
      category: 'Student Support',
      categoryAr: 'دعم الطلاب',
      isFeatured: false,
      isBreaking: false,
      isTrending: false,
      views: 650,
      tags: ['Psychological Support', 'Student Welfare', 'Mental Health', 'Expat Students'],
      tagsAr: ['الدعم النفسي', 'رعاية الطلاب', 'الصحة النفسية', 'الطلاب المغتربين']
    },
    {
      id: 4,
      title: 'Luxor University Mourns the Passing of the Esteemed Scholar Dr. Ahmed Omar Hashem',
      titleAr: 'جامعة الأقصر تنعى العالم الجليل د. أحمد عمر هاشم',
      description: 'Luxor University mourns with deep sorrow the passing of the distinguished scholar Dr. Ahmed Omar Hashem, former President of Al-Azhar University and member of the Senior Scholars Authority at Al-Azhar. Prof. Dr. Sabrin Abdel-Galil, President of Luxor University, extends heartfelt condolences to his family, students, and admirers.',
      descriptionAr: 'تنعى جامعة الأقصر بحزن بالغ وفاة العالم الجليل د. أحمد عمر هاشم، الرئيس الأسبق لجامعة الأزهر وعضو هيئة كبار العلماء بالأزهر الشريف.',
      content: `Luxor University mourns with deep sorrow the passing of the distinguished scholar **Dr. Ahmed Omar Hashem**, former President of Al-Azhar University and member of the Senior Scholars Authority at Al-Azhar. **Prof. Dr. Sabrin Abdel-Galil**, President of Luxor University, extends heartfelt condolences to his family, students, and admirers, praying that God grants him mercy and eternal peace.

**Dr. Ahmed Omar Hashem** was a towering figure in Islamic scholarship and education, having served as President of Al-Azhar University from 1996 to 2005. His contributions to Islamic jurisprudence, education, and interfaith dialogue have left an indelible mark on the academic and religious communities worldwide.

Throughout his illustrious career, Dr. Hashem was known for his moderate approach to Islamic scholarship and his efforts to promote understanding between different cultures and religions. He authored numerous books and research papers on Islamic jurisprudence, theology, and contemporary issues facing the Muslim world.

**Prof. Dr. Sabrin Abdel-Galil** stated: "The passing of Dr. Ahmed Omar Hashem is a great loss not only to Al-Azhar and Egypt but to the entire Islamic world. His wisdom, scholarship, and dedication to education have inspired generations of students and scholars. At Luxor University, we remember his contributions to higher education and his commitment to promoting knowledge and understanding."

Dr. Hashem's legacy includes his role in modernizing Al-Azhar University's curriculum while maintaining its traditional Islamic values, his efforts in promoting women's education in Islamic institutions, and his work in fostering dialogue between Islamic and Western educational institutions.

The university community joins the nation in mourning this great loss and extends prayers for his soul and comfort for his family during this difficult time.`,
      contentAr: 'تنعى جامعة الأقصر بحزن بالغ وفاة العالم الجليل د. أحمد عمر هاشم، الرئيس الأسبق لجامعة الأزهر وعضو هيئة كبار العلماء بالأزهر الشريف...',
      imageUrl: './assets/new4.jpg',
      images: [
        './assets/new4.jpg',
      ],
      date: new Date('2025-01-09'),
      author: 'University Communications',
      authorAr: 'إدارة الاتصالات الجامعية',
      category: 'University News',
      categoryAr: 'أخبار الجامعة',
      isFeatured: false,
      isBreaking: true,
      isTrending: false,
      views: 1100,
      tags: ['Obituary', 'Islamic Scholar', 'Al-Azhar', 'Education'],
      tagsAr: ['نعي', 'عالم إسلامي', 'الأزهر', 'تعليم']
    },
    {
      id: 5,
      title: 'Luxor University President Congratulates Dr. Khaled El-Anany on Winning UNESCO Director-General Post',
      titleAr: 'رئيس جامعة الأقصر يهنئ د. خالد العناني بفوزه بمنصب مدير عام اليونسكو',
      description: 'Prof. Dr. Sabrin Abdel-Galil, President of Luxor University, extends her warmest congratulations to Dr. Khaled El-Anany on his election as UNESCO Director-General, securing 55 out of 57 votes. She affirmed that this historic achievement adds to Egypt\'s diplomatic and cultural record.',
      descriptionAr: 'تتقدم أ.د. صابرين عبد الجليل رئيس جامعة الأقصر بأحر التهاني للدكتور خالد العناني بمناسبة انتخابه مديراً عاماً لليونسكو بحصوله على 55 صوتاً من أصل 57 صوتاً.',
      content: `**Prof. Dr. Sabrin Abdel-Galil**, President of Luxor University, extends her warmest congratulations to **Dr. Khaled El-Anany** on his election as UNESCO Director-General, securing 55 out of 57 votes. She affirmed that this historic achievement adds to Egypt's diplomatic and cultural record, reflecting the nation's civilizational stature and the trust the world places in Egyptian excellence and leadership.

Dr. El-Anany's election represents a significant milestone for Egypt and the Arab world, as he becomes the first Egyptian to hold this prestigious position in UNESCO's history. His extensive experience in archaeology, cultural heritage preservation, and international cooperation made him the ideal candidate for this role.

**Prof. Dr. Sabrin Abdel-Galil** stated: "Dr. El-Anany's election as UNESCO Director-General is a source of immense pride for all Egyptians. His deep understanding of cultural heritage, combined with his vision for education and scientific cooperation, will undoubtedly benefit not only Egypt but the entire international community."

Dr. El-Anany served as Egypt's Minister of Tourism and Antiquities, where he played a crucial role in promoting Egypt's rich cultural heritage and archaeological treasures. His work in developing sustainable tourism practices and protecting ancient monuments has earned international recognition.

As UNESCO Director-General, Dr. El-Anany is expected to focus on:

- Strengthening international cooperation in education, science, and culture
- Promoting cultural diversity and heritage preservation
- Advancing digital transformation in education
- Supporting developing countries in capacity building
- Fostering peace through education and cultural exchange

Luxor University, with its proximity to some of the world's most important archaeological sites, looks forward to enhanced cooperation with UNESCO under Dr. El-Anany's leadership, particularly in areas of archaeological research, cultural preservation, and educational exchange programs.`,
      contentAr: 'تتقدم أ.د. صابرين عبد الجليل رئيس جامعة الأقصر بأحر التهاني للدكتور خالد العناني بمناسبة انتخابه مديراً عاماً لليونسكو...',
      imageUrl: './assets/new5.jpg',
      images: [
        './assets/new5.jpg',
 
      ],
      date: new Date('2025-01-08'),
      author: 'University Communications',
      authorAr: 'إدارة الاتصالات الجامعية',
      category: 'International News',
      categoryAr: 'أخبار دولية',
      isFeatured: true,
      isBreaking: false,
      isTrending: true,
      views: 980,
      tags: ['UNESCO', 'International Recognition', 'Cultural Heritage', 'Egyptian Achievement'],
      tagsAr: ['اليونسكو', 'اعتراف دولي', 'التراث الثقافي', 'إنجاز مصري']
    },
    {
      id: 6,
      title: 'New Archaeological Discovery at Luxor Temple Reveals Ancient Pharaonic Inscriptions',
      titleAr: 'اكتشاف أثري جديد بمعبد الأقصر يكشف عن نقوش فرعونية قديمة',
      description: 'A joint archaeological mission from Luxor University and the Ministry of Tourism and Antiquities has uncovered remarkable Pharaonic inscriptions dating back to the reign of Ramesses II at Luxor Temple, providing new insights into ancient Egyptian religious practices.',
      descriptionAr: 'كشفت بعثة أثرية مشتركة من جامعة الأقصر ووزارة السياحة والآثار عن نقوش فرعونية رائعة تعود لعهد رمسيس الثاني بمعبد الأقصر، مما يوفر رؤى جديدة حول الممارسات الدينية المصرية القديمة.',
      content: `A joint archaeological mission from **Luxor University** and the **Ministry of Tourism and Antiquities** has uncovered remarkable Pharaonic inscriptions dating back to the reign of **Ramesses II** at Luxor Temple, providing new insights into ancient Egyptian religious practices and royal ceremonies.

The discovery, announced today by **Prof. Dr. Sabrin Abdel-Galil**, President of Luxor University, and **Dr. Mostafa Waziri**, Secretary-General of the Supreme Council of Antiquities, includes a series of well-preserved hieroglyphic inscriptions that detail religious rituals performed during the annual Opet Festival.

**Dr. Ahmed Farouk**, Head of the Archaeology Department at Luxor University and leader of the excavation team, explained that the inscriptions were found on a previously unexplored section of the temple's eastern wall. The texts describe the sacred journey of the god Amun from Karnak Temple to Luxor Temple, a central element of the Opet Festival.

The newly discovered inscriptions include:

- Detailed descriptions of ritual offerings made to Amun-Ra
- Names of previously unknown priests and temple officials
- References to specific ceremonies performed during the festival
- Artistic depictions of the sacred barque procession

**Prof. Dr. Sabrin Abdel-Galil** emphasized the significance of this discovery: "This finding not only enhances our understanding of ancient Egyptian religious practices but also demonstrates the important role that Luxor University plays in preserving and studying our rich cultural heritage. Our students and faculty are directly contributing to expanding human knowledge about one of the world's greatest civilizations."

The discovery is particularly significant as it provides new evidence about the continuity of religious practices during the New Kingdom period and offers insights into the administrative structure of ancient Egyptian temples.

The excavation team, which includes students from Luxor University's Archaeology Department, used advanced digital documentation techniques to record the inscriptions. The findings will be published in an upcoming issue of the Journal of Egyptian Archaeology.

Plans are underway to make the newly discovered inscriptions accessible to visitors through a special exhibition at the Luxor Museum, in collaboration with the Ministry of Tourism and Antiquities.`,
      contentAr: 'كشفت بعثة أثرية مشتركة من جامعة الأقصر ووزارة السياحة والآثار عن نقوش فرعونية رائعة تعود لعهد رمسيس الثاني بمعبد الأقصر...',
      imageUrl: './assets/new7.jpg',
      images: [
        './assets/new7.jpg',
  
      ],
      date: new Date('2025-01-07'),
      author: 'Dr. Ahmed Farouk',
      authorAr: 'د. أحمد فاروق',
      category: 'Archaeological Discovery',
      categoryAr: 'اكتشاف أثري',
      isFeatured: true,
      isBreaking: true,
      isTrending: true,
      views: 1500,
      tags: ['Archaeology', 'Pharaonic', 'Luxor Temple', 'Ramesses II', 'Hieroglyphics'],
      tagsAr: ['آثار', 'فرعوني', 'معبد الأقصر', 'رمسيس الثاني', 'هيروغليفية']
    }
  ];

  getLatestNews(): News[] {
    return this.mockNews.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  getFeaturedNews(): News | undefined {
    return this.mockNews.find(news => news.isFeatured);
  }

  getBreakingNews(): News[] {
    return this.mockNews.filter(news => news.isBreaking).slice(0, 3);
  }

  getTrendingNews(): News[] {
    return this.mockNews.filter(news => news.isTrending).slice(0, 5);
  }

  getMostReadNews(): News[] {
    return this.mockNews.sort((a, b) => b.views - a.views).slice(0, 5);
  }

  getNewsByCategory(category: string): News[] {
    return this.mockNews.filter(news => news.category === category);
  }

  getNewsById(id: number): Observable<News | undefined> {
    const news = this.mockNews.find(n => n.id === id);
    return of(news);
  }

  getRelatedNews(currentId: number, category: string, limit: number = 5): Observable<News[]> {
    const related = this.mockNews
      .filter(news => news.id !== currentId && news.category === category)
      .slice(0, limit);
    return of(related);
  }

  getNews(filter?: NewsFilter, page: number = 1, pageSize: number = 6): Observable<NewsResponse> {
    let filteredNews = [...this.mockNews];

    if (filter) {
      if (filter.category) {
        filteredNews = filteredNews.filter(news => news.category === filter.category);
      }
      
      if (filter.searchTerm) {
        const searchTerm = filter.searchTerm.toLowerCase();
        filteredNews = filteredNews.filter(news =>
          news.title.toLowerCase().includes(searchTerm) ||
          news.description.toLowerCase().includes(searchTerm) ||
          news.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
      }
      
      if (filter.dateFrom) {
        filteredNews = filteredNews.filter(news => news.date >= filter.dateFrom!);
      }
      
      if (filter.dateTo) {
        filteredNews = filteredNews.filter(news => news.date <= filter.dateTo!);
      }
    }

    // Sort by date (newest first)
    filteredNews.sort((a, b) => b.date.getTime() - a.date.getTime());

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedNews = filteredNews.slice(startIndex, endIndex);

    return of({
      items: paginatedNews,
      total: filteredNews.length,
      page,
      pageSize
    });
  }

  getCategories(): Observable<string[]> {
    const categories = [...new Set(this.mockNews.map(news => news.category))];
    return of(categories);
  }

  getNextNews(currentId: number): Observable<News | null> {
    const currentIndex = this.mockNews.findIndex(news => news.id === currentId);
    if (currentIndex === -1 || currentIndex === this.mockNews.length - 1) {
      return of(null);
    }
    return of(this.mockNews[currentIndex + 1]);
  }

  getPreviousNews(currentId: number): Observable<News | null> {
    const currentIndex = this.mockNews.findIndex(news => news.id === currentId);
    if (currentIndex === -1 || currentIndex === 0) {
      return of(null);
    }
    return of(this.mockNews[currentIndex - 1]);
  }
}