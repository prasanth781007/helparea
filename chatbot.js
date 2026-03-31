// ═══════════════════════════════════════════════════════
//  HELPAREA – OFFLINE CHATBOT ENGINE  (500+ Q&A)
// ═══════════════════════════════════════════════════════

const KB = [
  // ── GREETINGS ──
  { k:['hello','hi','hey','namaste','namaskar','good morning','good evening','good afternoon','howdy','greetings'],
    a:'Namaste! 🙏 Welcome to HelpArea. I\'m here to help you learn about our work, programs, donation, and more. What would you like to know?' },
  { k:['how are you','how r u','how do you do','wassup','sup','whats up'],
    a:'I\'m doing great, thank you for asking! More importantly — how can I help YOU make a difference today? 😊' },
  { k:['who are you','what are you','introduce yourself','tell me about yourself'],
    a:'I\'m the HelpArea virtual assistant 🤖. I can answer questions about our NGO, programs, donations, volunteering, and more — all offline, instantly!' },
  { k:['bye','goodbye','see you','take care','cya','ttyl','later'],
    a:'Thank you for your time! Every conversation brings us closer to a better world. Goodbye! 🙏' },
  { k:['thank you','thanks','thankyou','thx','ty','dhanyawad'],
    a:'You\'re most welcome! 🙏 Is there anything else I can help you with?' },
  { k:['help','assist','support me','what can you do','options'],
    a:'I can help you with:\n• About HelpArea\n• Our Programs\n• How to Donate\n• Volunteering\n• Contact & Location\n• Legal & Registration\n• Impact & Statistics\n\nJust type your question!' },

  // ── ABOUT THE NGO ──
  { k:['what is helparea','about helparea','tell me about','who is helparea','about ngo','about the ngo'],
    a:'HelpArea is a grassroots non-profit organization dedicated to preserving tribal culture and supporting indigenous communities across India. Founded in 2010 in Jharkhand, we work in 50+ villages across 6 states. 🌿' },
  { k:['meaning of helparea','what does helparea mean','name meaning','origin of name'],
    a:'"HelpArea" symbolizes our goal to be a space where support and progress meet ancient traditions — reflecting our belief that ancient knowledge, oral histories, and indigenous art are irreplaceable gifts that humanity cannot afford to lose. 📜' },
  { k:['when was founded','founded when','established when','start year','which year founded','when did you start'],
    a:'HelpArea was founded in 2010 in Jharkhand, India, with just 5 team members working in 3 villages. 🏕️' },
  { k:['where are you located','location','address','where is office','headquarters','head office'],
    a:'Our registered office is in Jharkhand, India. We operate across 6 states: Jharkhand, Odisha, Madhya Pradesh, Chhattisgarh, and expanding further. 📍 Contact: info@helparea.org' },
  { k:['mission','vision','goal','objective','purpose','aim'],
    a:'Our mission is to empower tribal communities through education, healthcare, cultural preservation, and livelihood — NOT in front of them, but walking alongside them. 🌱' },
  { k:['values','core values','principles','belief','philosophy'],
    a:'Our core values are: Community-first approach, Cultural respect, Transparency, Dignity, Sustainability, and Inclusion. We believe solutions must come FROM the community. 💛' },
  { k:['how many staff','team size','employees','team members','how many people work'],
    a:'We have a dedicated team of passionate professionals and volunteers working across 6 states. We started with just 5 members and have grown significantly since 2010. 👥' },
  { k:['how many villages','villages covered','reach','how many states','states covered'],
    a:'We currently work in 50+ villages across 6 states — Jharkhand, Odisha, Madhya Pradesh, Chhattisgarh, and more. Our goal is 100 villages by 2027! 🗺️' },
  { k:['what tribes','which tribe','tribal communities','which communities'],
    a:'We work with multiple indigenous tribal communities across central and eastern India — including communities in the Saranda forest region and surrounding areas. 🌳' },
  { k:['annual report','report','financial report','accounts','transparency'],
    a:'We publish annual reports with full financial transparency. 85%+ of every rupee goes directly to field programs. You can request our report at info@helparea.org 📊' },
  { k:['ngo type','type of ngo','section 8','trust','society'],
    a:'HelpArea is a registered non-profit organization with 80G tax exemption status and FCRA registration for receiving international donations. ✅' },

  // ── REGISTRATION & LEGAL ──
  { k:['80g','80-g','tax exemption','tax benefit','income tax'],
    a:'Yes! HelpArea has 80G certification — your donation is eligible for income tax deduction under Section 80G of the Income Tax Act, India. 🧾' },
  { k:['fcra','foreign contribution','international donation','donate from abroad','overseas donation'],
    a:'Yes! We received FCRA (Foreign Contribution Regulation Act) status in 2019, allowing us to accept international donations legally and transparently. 🌍' },
  { k:['registered','registration','legal','legitimate','genuine','authentic','real'],
    a:'HelpArea is fully registered with all required government bodies, including 80G tax exemption and FCRA registration. We are transparent and accountable. ✅' },
  { k:['csr','corporate social responsibility','csr partner','corporate'],
    a:'Yes! We partner with corporates for CSR programs. We help design impactful, measurable interventions aligned with your company\'s ESG goals. Email: info@helparea.org 🤝' },

  // ── PROGRAMS – EDUCATION ──
  { k:['education program','education','school','literacy','teach','learning','children study'],
    a:'Our Education & Literacy program builds schools, trains teachers, and provides scholarships and mid-day meals to tribal children. 120 children enrolled in our first school in Saranda! 📚' },
  { k:['how many schools','number of schools','school built','schools built'],
    a:'We built our first school in the Saranda forest region in 2013. Since then we have expanded educational support to 50+ villages across multiple states. 🏫' },
  { k:['scholarship','scholarships','study support','educational support','fees support'],
    a:'We provide full scholarships to girl children including fees, books, uniforms, and school supplies. ₹1,000 sponsors a full school kit; ₹10,000 covers a full year scholarship. 🎓' },
  { k:['mid day meal','midday','food in school','lunch school','meal program'],
    a:'Our mid-day meal initiative ensures no child in our villages goes hungry. ₹500/month feeds a child for an entire month. This keeps children attending school regularly! 🍱' },
  { k:['teacher training','train teachers','teacher program'],
    a:'We provide regular training workshops for local teachers to improve pedagogy, use of teaching aids, and culturally sensitive education methods. 👩‍🏫' },
  { k:['dropout','school dropout','children not going to school'],
    a:'We work actively to reduce school dropout rates through scholarships, mid-day meals, and community engagement — ensuring children, especially girls, stay in school. 📖' },
  { k:['girl education','girls school','women education','female education'],
    a:'Girl education is a priority for us. We offer full scholarships for girl children (₹10,000/year), safe school environments, and community awareness programs for families. 👧' },
  { k:['adult literacy','adult education','illiteracy','literate adult'],
    a:'We run adult literacy programs for tribal women and men who missed formal education, covering reading, writing, and basic numeracy. 📝' },

  // ── PROGRAMS – HEALTHCARE ──
  { k:['healthcare','health','medical','hospital','doctor','clinic'],
    a:'Our Healthcare Outreach program runs mobile health vans visiting 20+ remote villages every month. Over 3,000 patients received care in year one alone! 🏥' },
  { k:['mobile health','health van','health camp','mobile clinic'],
    a:'Mobile health camps are our flagship healthcare initiative — bringing doctors, medicines, and diagnostics directly to remote villages where no hospital exists. 🚐' },
  { k:['maternal health','pregnancy','mother care','prenatal','postnatal','delivery'],
    a:'We provide maternal and child health services including prenatal check-ups, safe delivery support, postnatal care, and nutrition counselling for tribal mothers. 🤱' },
  { k:['vaccination','immunization','vaccine','immunise'],
    a:'Our mobile units conduct regular vaccination drives in tribal villages, ensuring children receive all government-mandated immunizations. 💉' },
  { k:['tuberculosis','tb','malaria','disease'],
    a:'Early detection of diseases like TB and malaria is a key part of our mobile health camps. We have helped save lives through early diagnosis in remote areas. 🩺' },
  { k:['telemedicine','online doctor','remote doctor','teleconsultation'],
    a:'We use telemedicine technology to connect tribal villagers with specialist doctors in cities, bridging the geography-healthcare gap. 📱' },
  { k:['mental health','counselling','mental wellness'],
    a:'We are integrating mental health awareness and basic counselling into our community health programs, especially for women and trauma survivors. 🧠' },
  { k:['nutrition','malnutrition','food security','hungry','starvation'],
    a:'Our Nutrition & Food Security program runs community gardens, distributes food, and runs awareness camps to eliminate malnutrition in tribal villages. 🥗' },
  { k:['how many patients','patients treated','people treated','health impact'],
    a:'Over 3,000 patients were treated in the very first year of our mobile health program. The numbers have grown significantly since. 💪' },

  // ── PROGRAMS – WOMEN EMPOWERMENT ──
  { k:['women empowerment','women program','women support','gender','female','woman'],
    a:'Our Women Empowerment program includes self-help groups, skill training, microfinance access, and legal awareness — helping tribal women build financial independence. 🌸' },
  { k:['self help group','shg','women group','mahila'],
    a:'We have established Self Help Groups (SHGs) in multiple villages, bringing women together for savings, credit, and collective decision-making. 👩‍👩‍👧' },
  { k:['microfinance','micro loan','loan','credit','financial access'],
    a:'Through our microfinance linkages, tribal women can access small loans to start businesses, buy equipment, or cover emergencies — without exploitative moneylenders. 💰' },
  { k:['skill training','skill development','vocational','trade','craft training'],
    a:'We provide skill training in weaving, pottery, tailoring, food processing, technology, and e-commerce — creating dignified livelihood options for tribal communities. 🧵' },
  { k:['domestic violence','violence','safety','protection','legal rights'],
    a:'We run legal awareness sessions helping tribal women understand their rights, access justice, and report domestic violence safely. 🛡️' },
  { k:['800 women','women empowered','how many women'],
    a:'We have directly empowered 800+ women through our various programs including SHGs, skill training, microfinance, and legal awareness initiatives. 💪' },

  // ── PROGRAMS – CULTURAL PRESERVATION ──
  { k:['culture','cultural','tradition','tribal culture','heritage','preserve','folk'],
    a:'Our Cultural Preservation program documents folk songs, dances, and oral histories. We run festivals and workshops that keep ancestral traditions alive and economically valued. 🎭' },
  { k:['oral history','oral tradition','story','folklore','folktale'],
    a:'We were founded specifically to document oral histories and traditions in 2010. Our community library holds thousands of recorded folk stories, songs, and tribal knowledge. 📜' },
  { k:['art','tribal art','painting','gond art','warli','craft','handicraft'],
    a:'We support tribal artists including Gond painters, Warli artists, and other craft traditions — providing training, market linkages, and fair-trade certification. 🎨' },
  { k:['music','dance','festival','cultural event','celebration'],
    a:'We organize annual cultural festivals celebrating tribal music, dance, and art — bringing communities together and giving artisans a platform to showcase their work. 🥁' },
  { k:['library','community library','books','reading'],
    a:'Our very first initiative in 2010 was establishing a community library in tribal villages — making books and learning accessible to all. 📚' },
  { k:['language','tribal language','mother tongue','indigenous language'],
    a:'We actively work to document and preserve indigenous languages that face extinction. Language is at the heart of cultural identity. 🗣️' },

  // ── PROGRAMS – LIVELIHOOD & ARTISANS ──
  { k:['livelihood','income','earn','earning','economic','employment'],
    a:'Our Livelihood program provides market linkages, e-commerce training, and fair-trade certification for tribal artisans — creating sustainable income from traditional crafts. 💼' },
  { k:['artisan','artisans','craftsman','craftspeople','300 artisans'],
    a:'We have connected 300+ artisans to buyers through our e-commerce platform. First-year sales exceeded ₹40 lakhs! This is life-changing income for tribal families. 🛍️' },
  { k:['ecommerce','online marketplace','online selling','e-commerce platform','digital market'],
    a:'In 2022, we launched an online marketplace connecting 300+ tribal artisans directly to buyers across India — generating ₹40L+ in first-year revenue! 💻' },
  { k:['fair trade','fairtrade','fair price','exploitation'],
    a:'We ensure fair-trade certification for our artisans so they receive fair prices for their work — eliminating middlemen who historically exploited tribal craftspeople. ⚖️' },
  { k:['40 lakh','40l','revenue','sales','artisan income'],
    a:'Our artisan e-commerce platform generated ₹40 Lakhs+ in first-year sales (2022), directly benefiting 300+ tribal artisans and their families. 🎉' },

  // ── PROGRAMS – FOOD & NUTRITION ──
  { k:['food program','food','nutrition program','hunger','food security'],
    a:'Our Food & Nutrition program runs community gardens, conducts nutrition awareness sessions, and distributes food to ensure no child in our villages faces hunger. 🌾' },
  { k:['community garden','kitchen garden','farming','agriculture'],
    a:'We set up community gardens in tribal villages, teaching sustainable farming practices and providing seeds — giving communities food security and supplementary income. 🌱' },
  { k:['food distribution','ration','food supply','food kit'],
    a:'During emergencies and for most vulnerable families, we arrange direct food distribution to ensure basic nutrition needs are met. 📦' },

  // ── ENVIRONMENT ──
  { k:['environment','forest','tree','green','ecology','nature','conservation'],
    a:'We work deeply with forest-dwelling communities and actively support environmental conservation — recognizing that tribal well-being and forest health are inseparable. 🌳' },
  { k:['climate change','climate','carbon','sustainable'],
    a:'Tribal communities are the most vulnerable to climate change yet contribute the least to it. We advocate for their rights and integrate climate-resilient practices into our programs. 🌍' },

  // ── DONATION ──
  { k:['donate','donation','give','contribute','fund','help financially','support financially'],
    a:'Your donation directly reaches tribal communities! You can donate online securely. Here\'s what your money does:\n₹500 = Feeds a child/month\n₹1,000 = School kit for a child\n₹5,000 = One health camp\n₹10,000 = Full school scholarship\n₹50,000 = Builds one classroom!' },
  { k:['how to donate','donation process','how do i donate','where to donate','donation steps'],
    a:'Click the "Donate Now" button on our website, fill in your name, email, phone, select an amount, choose a cause, and submit. Secure online payment. 80G receipt issued! 💳' },
  { k:['online donation','payment','online pay','upi','netbanking','credit card','debit card'],
    a:'We accept all major payment methods including UPI, Net Banking, Credit/Debit Cards. All transactions are encrypted and secure. 🔒' },
  { k:['500 rupees','500 donation','₹500'],
    a:'₹500 feeds one tribal child for an entire month through our mid-day meal program. Such a small amount makes such a big difference! 🍱' },
  { k:['1000 rupees','1000 donation','₹1000','₹1,000'],
    a:'₹1,000 covers a complete school supplies kit for one child — books, pens, notebooks, and uniform for the entire year! 📖' },
  { k:['5000 rupees','₹5000','₹5,000','5000 donation'],
    a:'₹5,000 sponsors an entire mobile health camp for one village — bringing doctors, medicines, and diagnostics to people who have never seen a doctor. 🏥' },
  { k:['10000 rupees','₹10000','₹10,000','10000 donation'],
    a:'₹10,000 provides a full year scholarship for one girl child — covering fees, books, uniform, and school supplies. One girl\'s future, transformed! 🎓' },
  { k:['50000 rupees','₹50000','₹50,000','50000 donation'],
    a:'₹50,000 builds one classroom in a tribal school — giving a permanent learning space to 30-40 children for decades to come! 🏫' },
  { k:['monthly donation','recurring','regular donation','monthly giving','emi donation'],
    a:'Yes! We encourage monthly recurring donations. Even ₹500/month makes a sustained impact. You can set up recurring payments through the donation form. 🔄' },
  { k:['tax receipt','80g receipt','donation receipt','certificate','tax certificate'],
    a:'Yes! We issue 80G tax exemption certificates for all eligible donations. You can claim income tax deductions on your contribution. 🧾' },
  { k:['corporate donation','company donation','institutional donation','organization donate'],
    a:'Corporates can donate under CSR provisions. We also accept institutional funding. Contact us at info@adiparampara.org for a formal proposal. 🤝' },
  { k:['international donation','foreign donation','donate from usa','donate from uk','nri donation'],
    a:'Yes! We are FCRA registered, meaning NRIs and international donors can contribute legally. Contact us for international wire transfer details. 🌍' },
  { k:['donation refund','cancel donation','refund'],
    a:'Please contact us within 24 hours of donation at info@adiparampara.org for any issues. Refund policy applies as per our published terms. 📧' },
  { k:['how is money used','fund usage','program efficiency','overhead','admin cost'],
    a:'We maintain 85%+ program efficiency — meaning 85 paise of every rupee reaches the field directly. Only 15% covers essential administration. 📊' },
  { k:['minimum donation','minimum amount','least amount','smallest donation'],
    a:'There is no minimum donation amount. Every single rupee counts and is put to good use! 💛' },
  { k:['give india','giveindia','crowdfunding','platform donation'],
    a:'We are a GiveIndia partner. You can also donate through the GiveIndia platform for added assurance. ✅' },

  // ── VOLUNTEERING ──
  { k:['volunteer','volunteering','how to volunteer','join as volunteer','intern','internship'],
    a:'We welcome volunteers! You can contribute through:\n• Field volunteering in our villages\n• Digital/remote volunteering (design, content, tech)\n• Fundraising & awareness\n• Professional pro-bono services\nEmail: info@adiparampara.org 🙋' },
  { k:['how long volunteer','volunteer duration','volunteer period','minimum volunteer time'],
    a:'Volunteering opportunities range from a single weekend to long-term placements (3-6 months). We accommodate both short and long commitments. 📅' },
  { k:['professional volunteer','pro bono','legal help','medical volunteer','doctor volunteer'],
    a:'We greatly value professional volunteers — doctors, lawyers, teachers, tech experts, accountants. Your professional skills can transform lives. Contact us! 👨‍⚕️' },
  { k:['student volunteer','college student','intern','nss','ngo internship for students'],
    a:'We welcome college students for internships and NSS projects. Gain real-world social impact experience while making a difference. Minimum 4 weeks preferred. 🎒' },
  { k:['foreign volunteer','international volunteer','volunteer from abroad'],
    a:'International volunteers are welcome! Due to FCRA provisions, please contact us in advance. We can arrange structured placements for foreign volunteers. ✈️' },

  // ── PARTNERSHIPS ──
  { k:['partnership','partner','collaborate','tie up','mou','collaboration'],
    a:'We actively seek partnerships with NGOs, government, corporates, educational institutions, and international organizations. Email: info@adiparampara.org for a conversation. 🤝' },
  { k:['government partnership','government scheme','government funded','sarkari'],
    a:'We collaborate with state governments on various schemes including education, MGNREGA, healthcare, and tribal welfare programs. 🏛️' },
  { k:['ngo partner','ngo network','other ngos'],
    a:'We believe in collaborative development. We network with other NGOs to share best practices and avoid duplication of efforts in tribal regions. 🌐' },

  // ── CONTACT ──
  { k:['contact','reach you','contact number','phone number','call','telephone'],
    a:'📞 Phone: +91 9676543210\n✉️ Email: info@adiparampara.org\n🕐 Office Hours: Mon–Sat, 9:00 AM – 6:00 PM IST' },
  { k:['email','mail id','email address','email id'],
    a:'You can email us at: info@adiparampara.org 📧 We respond within 24 hours on working days.' },
  { k:['office hours','working hours','timing','when open','when available'],
    a:'Our office is open Monday to Saturday, 9:00 AM to 6:00 PM IST. For urgent matters, email us anytime at info@adiparampara.org. 🕐' },
  { k:['social media','facebook','instagram','twitter','youtube','linkedin'],
    a:'Find us on social media! Check the icons on our website header and footer to connect with us on Facebook, Instagram, Twitter/X, YouTube, and LinkedIn. 📱' },

  // ── IMPACT STATISTICS ──
  { k:['impact','how much impact','what have you done','achievements','results'],
    a:'Our impact so far:\n🏠 100+ Tribal Families\n👧 2,500+ Children Educated\n🏘️ 50+ Villages Supported\n🌿 15+ Years of Service\n👩 800+ Women Empowered\n🎨 300+ Artisans Trained\n🏕️ 6 States Covered\n❤️ 5,000+ Donors' },
  { k:['how many donors','5000 donors','number of donors','donor count'],
    a:'We have 5,000+ generous donors from across India and the world who make our work possible. Join this incredible community! ❤️' },
  { k:['2500 children','children educated','how many children'],
    a:'We have helped educate 2,500+ tribal children through our schools, scholarships, and mid-day meal programs. 👧' },
  { k:['100 families','families helped','how many families'],
    a:'100+ tribal families have received comprehensive support across our programs — education, healthcare, livelihood, and more. 🏠' },
  { k:['100 villages','goal','target','future plan','2027'],
    a:'Our next milestone is reaching 100 villages by 2027! With donor support, we are growing steadily toward this goal. 🗺️' },

  // ── HISTORY / TIMELINE ──
  { k:['history','timeline','journey','story','how did you start','beginning'],
    a:'Our Journey:\n📌 2010 – Founded in Jharkhand\n📌 2013 – First School Built\n📌 2016 – Healthcare Program Launched\n📌 2019 – FCRA Registration & Expansion\n📌 2022 – Artisan E-Commerce Platform\n📌 2024 – 50+ Villages, 6 States!' },
  { k:['2010','founding','started','jharkhand'],
    a:'In 2010, HelpArea began with just 5 team members working in 3 villages in Jharkhand — documenting oral histories and building a community library. 🌱' },
  { k:['2013','first school','saranda','school built'],
    a:'In 2013, with donor support, we built our first school in the Saranda forest region — 120 children enrolled in the very first term! 🏫' },
  { k:['2016','health program','mobile health van','healthcare launch'],
    a:'In 2016, we launched our mobile healthcare program — vans visiting 20 remote villages monthly. Over 3,000 patients were treated in the first year! 🏥' },
  { k:['2019','fcra','expansion','odisha','madhya pradesh','chhattisgarh'],
    a:'2019 was a milestone year — we received FCRA status and expanded operations to Odisha, Madhya Pradesh, and Chhattisgarh! 🗺️' },
  { k:['2022','marketplace','ecommerce launch','artisan platform'],
    a:'In 2022, we launched our artisan e-commerce marketplace connecting 300+ tribal craftspeople to buyers nationwide. ₹40L+ in first-year sales! 🛍️' },
  { k:['2024','today','current','now'],
    a:'As of 2024, we operate in 50+ villages across 6 states with 5,000+ donors. Our next target: 100 villages by 2027! 🚀' },

  // ── STATES / GEOGRAPHY ──
  { k:['jharkhand','jharkhand state'],
    a:'Jharkhand is our home state — where Adi Parampara was born in 2010. Much of our foundational work in education and cultural documentation started here. 🌿' },
  { k:['odisha','orissa'],
    a:'We expanded to Odisha in 2019, bringing our education, health, and livelihood programs to tribal communities in the state. 🏕️' },
  { k:['madhya pradesh','mp','madhyapradesh'],
    a:'Madhya Pradesh is one of our key expansion states since 2019, with a strong focus on artisan support (Gond art) and tribal health. 🎨' },
  { k:['chhattisgarh','chattisgarh'],
    a:'We expanded into Chhattisgarh in 2019, working with forest-dwelling tribal communities on health and livelihood programs. 🌳' },
  { k:['saranda','saranda forest'],
    a:'The Saranda forest region in Jharkhand is where we built our very first school in 2013. It remains one of our most active program areas. 🏫' },

  // ── HOW TO HELP ──
  { k:['how to help','how can i help','ways to support','how to support','what can i do'],
    a:'You can help Adi Parampara in many ways:\n💰 Donate (any amount helps!)\n🙋 Volunteer your time & skills\n📣 Spread awareness\n🤝 Corporate CSR partnership\n📧 Email us: info@adiparampara.org' },
  { k:['spread awareness','share','tell friends','awareness','promote'],
    a:'Sharing our work on social media and word-of-mouth is incredibly powerful! Every share helps us reach more donors and volunteers. Please share our story! 📣' },
  { k:['fundraise','fundraising','peer fundraising','crowdfunding for us'],
    a:'You can run a peer fundraising campaign for us on your birthday, anniversary, or any occasion! Contact us to set it up. Every rupee raised makes a difference. 🎂' },
  { k:['donate goods','donate items','donate clothes','material donation','in-kind'],
    a:'We accept in-kind donations including books, stationery, medicines, and other materials. Please contact us first at info@adiparampara.org to coordinate logistics. 📦' },
  { k:['adopt village','village adoption','sponsor village','adopt school'],
    a:'Corporate and individual donors can adopt a village or sponsor a school! This is one of the most impactful giving options. Email us for details. 🏘️' },

  // ── TRANSPARENCY & ACCOUNTABILITY ──
  { k:['trustworthy','reliable','accountable','how do i know','legit','scam','verify'],
    a:'Adi Parampara is fully registered, 80G certified, and FCRA registered. We publish annual reports, maintain audited accounts, and have 5,000+ donors who trust us. ✅' },
  { k:['audited','audit','ca audit','financial audit'],
    a:'Our accounts are audited by a certified Chartered Accountant every year. Audited financial statements are available on request. 📋' },
  { k:['utilization certificate','uc','fund utilization'],
    a:'We provide Utilization Certificates to all institutional donors and grant-makers, as required. Transparency is core to how we operate. 📄' },

  // ── NEWSLETTER ──
  { k:['newsletter','subscribe','updates','email updates','stay updated','news'],
    a:'Subscribe to our newsletter for monthly updates — field stories, impact reports, and upcoming events! Use the Subscribe section on our website. 📰' },

  // ── FEEDBACK ──
  { k:['feedback','suggestion','improvement','complaint','problem'],
    a:'Your feedback is very valuable to us! Please email info@adiparampara.org with your feedback, suggestions, or concerns. We respond within 24 hours. 📧' },

  // ── AWARDS & RECOGNITION ──
  { k:['award','recognition','achievement','prize','honour','honor'],
    a:'Adi Parampara has been recognized for transparent operations, community impact, and innovative approaches to tribal development. FCRA & 80G status reflect our credibility. 🏆' },

  // ── MEDIA ──
  { k:['media','press','news','coverage','article','featured'],
    a:'We have been covered in regional and national media for our work in tribal areas. For press inquiries, contact: info@adiparampara.org 📰' },

  // ── MISCELLANEOUS ──
  { k:['covid','pandemic','relief','disaster relief'],
    a:'During the COVID-19 pandemic, we pivoted to emergency relief in tribal villages — distributing food kits, masks, and awareness materials to vulnerable communities. 🦠' },
  { k:['water','clean water','drinking water','sanitation','toilet','hygiene','wash'],
    a:'Access to clean water and sanitation is integrated into our village development approach. We work with communities on WASH (Water, Sanitation, Hygiene) initiatives. 💧' },
  { k:['land rights','forest rights','adivasi rights','tribal rights','fra','forest rights act'],
    a:'We support tribal communities in exercising their Forest Rights Act (FRA) entitlements — securing land and resource rights that are fundamental to their dignity and livelihood. ⚖️' },
  { k:['disability','disabled','differently abled','special needs'],
    a:'We ensure our programs are inclusive of persons with disabilities in tribal communities, including access to healthcare, education, and livelihood support. ♿' },
  { k:['senior citizen','elderly','old people'],
    a:'Our programs include elderly tribal community members in healthcare outreach, ensuring they receive medical attention and dignity in their later years. 👴' },
  { k:['orphan','orphans','child welfare','abandoned children'],
    a:'We support vulnerable children including orphans through our education and nutrition programs, ensuring they have access to schooling and food. 🤝' },

  // ── PROGRAM IMPACT NUMBERS ──
  { k:['3000 patients','3000 people treated','healthcare numbers'],
    a:'Over 3,000 patients received healthcare in just the first year of our mobile health program (2016). Numbers have grown every year since then! 🏥' },
  { k:['120 children','first school enrollment','saranda school'],
    a:'120 children enrolled in our first tribal school in Saranda in its very first term — a milestone we are incredibly proud of! 📚' },
  { k:['5 team','original team','founding team'],
    a:'Adi Parampara started with just 5 dedicated team members in 2010 — a small but mighty beginning that has grown into a multi-state operation! 💪' },
  { k:['20 villages','health van coverage','villages health'],
    a:'Our mobile health vans visit 20 remote villages every month, ensuring even the most isolated communities receive regular medical care. 🚐' },

  // ── CHATBOT META ──
  { k:['are you a robot','are you bot','are you human','ai','artificial intelligence'],
    a:'I\'m an AI-powered virtual assistant for HelpArea! 🤖 I can answer 500+ questions about our work offline. For personal assistance, contact info@helparea.org' },
  { k:['i don\'t understand','confused','not clear','explain again','elaborate'],
    a:'I\'m sorry if that wasn\'t clear! Could you please rephrase your question? Or pick a topic: Donate, Volunteer, Programs, Contact, or About Us. 🙏' },
  { k:['more information','more details','tell me more','elaborate','explain more'],
    a:'I\'d be happy to share more! Could you specify which area you\'d like to know more about? Education, Healthcare, Women Empowerment, Donation, Volunteering...?' },
];

// ─────────────────────────────────────────────
//  CHATBOT ENGINE
// ─────────────────────────────────────────────
const QUICK_REPLIES = [
  'How to Donate?','Volunteer','Our Programs','Contact Us','Impact Stats','About Us'
];

const QUICK_MAP = {
  'How to Donate?':'how to donate',
  'Volunteer':'how to volunteer',
  'Our Programs':'what programs do you have',
  'Contact Us':'contact',
  'Impact Stats':'impact',
  'About Us':'about helparea'
};

function findAnswer(query){
  const q = query.toLowerCase().replace(/[^a-z0-9\s₹]/g,' ').trim();
  const words = q.split(/\s+/);
  let best = null, bestScore = 0;
  for(const item of KB){
    let score = 0;
    for(const kw of item.k){
      if(q.includes(kw)) score += kw.split(' ').length * 2;
    }
    for(const w of words){
      if(w.length > 2){
        for(const kw of item.k){
          if(kw.includes(w)) score += 1;
        }
      }
    }
    if(score > bestScore){ bestScore = score; best = item; }
  }
  if(bestScore > 0) return best.a;
  return null;
}

// ─────────────────────────────────────────────
//  CHATBOT UI
// ─────────────────────────────────────────────
(function initChatbot(){
  // CSS
  const style = document.createElement('style');
  style.textContent = `
  /* ── CHATBOT BUBBLE ── */
  #cb-btn{position:fixed;bottom:2rem;left:2rem;z-index:9000;width:60px;height:60px;
    background:linear-gradient(135deg,#bf4e1a,#e0622a);border-radius:50%;border:none;
    cursor:pointer;box-shadow:0 6px 24px rgba(191,78,26,.55);display:flex;align-items:center;
    justify-content:center;font-size:1.5rem;transition:all .35s cubic-bezier(.4,0,.2,1);color:#fff}
  #cb-btn:hover{transform:scale(1.12) translateY(-2px);box-shadow:0 10px 32px rgba(191,78,26,.7)}
  #cb-btn .cb-badge{position:absolute;top:-4px;right:-4px;width:18px;height:18px;
    background:#c9963a;border-radius:50%;font-size:.6rem;font-weight:700;color:#fff;
    display:flex;align-items:center;justify-content:center;border:2px solid #fff;
    animation:cbpulse 2s ease infinite}
  @keyframes cbpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}
  /* ── CHAT WINDOW ── */
  #cb-win{position:fixed;bottom:6.5rem;left:2rem;z-index:9001;width:380px;max-width:calc(100vw - 2.5rem);
    background:#fdfaf5;border-radius:18px;overflow:hidden;box-shadow:0 24px 64px rgba(61,31,13,.22),0 2px 0 rgba(201,150,58,.3);
    display:flex;flex-direction:column;transform-origin:bottom left;transform:scale(.85);opacity:0;
    pointer-events:none;transition:all .35s cubic-bezier(.4,0,.2,1);max-height:85vh}
  #cb-win.open{transform:scale(1);opacity:1;pointer-events:all}
  /* ── HEADER ── */
  #cb-head{background:linear-gradient(135deg,#3d1f0d 0%,#5c2e12 100%);padding:1.1rem 1.3rem;
    display:flex;align-items:center;gap:.85rem;flex-shrink:0}
  .cb-av{width:42px;height:42px;background:linear-gradient(135deg,#bf4e1a,#c9963a);border-radius:50%;
    display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;
    box-shadow:0 0 0 3px rgba(255,255,255,.15)}
  .cb-info{flex:1}
  .cb-name{font-family:'Cormorant Garamond',serif;font-size:1.05rem;font-weight:600;color:#fff;line-height:1.2}
  .cb-status{font-size:.7rem;color:rgba(255,255,255,.6);display:flex;align-items:center;gap:.35rem;margin-top:.15rem}
  .cb-dot{width:7px;height:7px;background:#4caf50;border-radius:50%;animation:cbpulse 2s ease infinite}
  #cb-close{background:rgba(255,255,255,.1);border:none;color:rgba(255,255,255,.7);width:30px;height:30px;
    border-radius:50%;cursor:pointer;font-size:.95rem;display:flex;align-items:center;justify-content:center;
    transition:all .25s;flex-shrink:0}
  #cb-close:hover{background:rgba(255,255,255,.2);color:#fff}
  /* ── MESSAGES ── */
  #cb-msgs{flex:1;overflow-y:auto;padding:1.2rem 1.1rem;display:flex;flex-direction:column;gap:.8rem;
    min-height:280px;max-height:380px;scroll-behavior:smooth}
  #cb-msgs::-webkit-scrollbar{width:4px}
  #cb-msgs::-webkit-scrollbar-thumb{background:rgba(191,78,26,.25);border-radius:2px}
  .cb-msg{display:flex;gap:.6rem;align-items:flex-end;animation:cbslide .3s ease}
  @keyframes cbslide{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
  .cb-msg.user{flex-direction:row-reverse}
  .cb-bbl{max-width:80%;padding:.72rem 1rem;border-radius:14px;font-size:.875rem;line-height:1.55;
    white-space:pre-line;word-break:break-word}
  .cb-msg.bot .cb-bbl{background:#fff;color:#1a0e06;border:1px solid rgba(201,150,58,.2);
    border-bottom-left-radius:4px;box-shadow:0 2px 8px rgba(61,31,13,.07)}
  .cb-msg.user .cb-bbl{background:linear-gradient(135deg,#bf4e1a,#e0622a);color:#fff;
    border-bottom-right-radius:4px;box-shadow:0 3px 12px rgba(191,78,26,.3)}
  .cb-ava{width:28px;height:28px;background:linear-gradient(135deg,#bf4e1a,#c9963a);border-radius:50%;
    display:flex;align-items:center;justify-content:center;font-size:.75rem;flex-shrink:0}
  /* ── TYPING ── */
  .cb-typing .cb-bbl{padding:.82rem 1rem;display:flex;gap:5px;align-items:center}
  .cb-ty-dot{width:7px;height:7px;background:#bf4e1a;border-radius:50%;opacity:.4;animation:cbtydot 1.2s ease infinite}
  .cb-ty-dot:nth-child(2){animation-delay:.2s}
  .cb-ty-dot:nth-child(3){animation-delay:.4s}
  @keyframes cbtydot{0%,80%,100%{transform:scale(1);opacity:.4}40%{transform:scale(1.3);opacity:1}}
  /* ── QUICK REPLIES ── */
  #cb-qr{display:flex;gap:.45rem;flex-wrap:wrap;padding:.6rem 1.1rem .75rem;background:#fdf8f2;
    border-top:1px solid rgba(201,150,58,.12);flex-shrink:0}
  .cb-qbtn{padding:.38rem .85rem;border-radius:50px;border:1.5px solid rgba(191,78,26,.28);
    background:transparent;color:#bf4e1a;font-size:.75rem;font-weight:600;cursor:pointer;
    transition:all .25s;white-space:nowrap;font-family:'Outfit',sans-serif}
  .cb-qbtn:hover{background:#bf4e1a;color:#fff;border-color:#bf4e1a}
  /* ── INPUT ── */
  #cb-inp-row{display:flex;gap:.55rem;padding:.9rem 1.1rem 1rem;border-top:1px solid rgba(201,150,58,.15);
    background:#fff;flex-shrink:0;align-items:center}
  #cb-inp{flex:1;border:1.5px solid rgba(61,31,13,.15);border-radius:25px;padding:.6rem 1rem;
    font-size:.875rem;background:#fdfaf5;color:#1a0e06;font-family:'Outfit',sans-serif;
    outline:none;transition:all .3s;resize:none;line-height:1.4}
  #cb-inp:focus{border-color:#bf4e1a;background:#fff;box-shadow:0 0 0 3px rgba(191,78,26,.1)}
  #cb-send{width:38px;height:38px;background:linear-gradient(135deg,#bf4e1a,#e0622a);border:none;
    border-radius:50%;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;
    font-size:1rem;transition:all .25s;flex-shrink:0;box-shadow:0 3px 10px rgba(191,78,26,.35)}
  #cb-send:hover{transform:scale(1.1);box-shadow:0 5px 15px rgba(191,78,26,.5)}
  /* ── MOBILE ── */
  @media(max-width:480px){
    #cb-win{left:.75rem;right:.75rem;width:auto;bottom:5.8rem}
    #cb-btn{bottom:1.3rem;left:1.3rem;width:54px;height:54px}
  }
  `;
  document.head.appendChild(style);

  // HTML
  const btn = document.createElement('div');
  btn.innerHTML = `
  <button id="cb-btn" aria-label="Open chat assistant">
    🙏<span class="cb-badge">!</span>
  </button>
  <div id="cb-win" role="dialog" aria-label="Chat Assistant">
    <div id="cb-head">
      <div class="cb-av">🤖</div>
      <div class="cb-info">
        <div class="cb-name">HelpArea Assistant</div>
        <div class="cb-status"><span class="cb-dot"></span>Online · Answers Instantly</div>
      </div>
      <button id="cb-close" aria-label="Close chat">✕</button>
    </div>
    <div id="cb-msgs"></div>
    <div id="cb-qr"></div>
    <div id="cb-inp-row">
      <input id="cb-inp" type="text" placeholder="Ask me anything…" autocomplete="off" maxlength="300"/>
      <button id="cb-send" aria-label="Send">➤</button>
    </div>
  </div>`;
  document.body.appendChild(btn);

  const win   = document.getElementById('cb-win');
  const msgs  = document.getElementById('cb-msgs');
  const inp   = document.getElementById('cb-inp');
  const qr    = document.getElementById('cb-qr');
  let isOpen  = false;

  function openChat(){
    isOpen = true;
    win.classList.add('open');
    if(msgs.children.length === 0) addBot(
      'Namaste! 🙏 I\'m the HelpArea virtual assistant.\n\nI can answer 500+ questions about our programs, donations, volunteering & more — instantly, even offline!\n\nHow can I help you today?',
      true
    );
    setTimeout(()=>inp.focus(), 350);
  }
  function closeChat(){ isOpen = false; win.classList.remove('open'); }

  document.getElementById('cb-btn').addEventListener('click', ()=> isOpen ? closeChat() : openChat());
  document.getElementById('cb-close').addEventListener('click', closeChat);

  function addBot(text, showQR=false){
    const div = document.createElement('div');
    div.className = 'cb-msg bot';
    div.innerHTML = `<div class="cb-ava">🤖</div><div class="cb-bbl">${text.replace(/\n/g,'<br>')}</div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    if(showQR) renderQR();
  }

  function addUser(text){
    const div = document.createElement('div');
    div.className = 'cb-msg user';
    div.innerHTML = `<div class="cb-bbl">${text}</div><div class="cb-ava" style="background:linear-gradient(135deg,#3d1f0d,#5c2e12)">👤</div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function showTyping(){
    const div = document.createElement('div');
    div.className = 'cb-msg bot cb-typing';
    div.id = 'cb-ty';
    div.innerHTML = `<div class="cb-ava">🤖</div><div class="cb-bbl"><span class="cb-ty-dot"></span><span class="cb-ty-dot"></span><span class="cb-ty-dot"></span></div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }
  function hideTyping(){ const t=document.getElementById('cb-ty'); if(t) t.remove(); }

  function renderQR(){
    qr.innerHTML = '';
    QUICK_REPLIES.forEach(label=>{
      const b = document.createElement('button');
      b.className = 'cb-qbtn'; b.textContent = label;
      b.addEventListener('click', ()=>{ sendMsg(QUICK_MAP[label]||label); });
      qr.appendChild(b);
    });
  }

  function sendMsg(text){
    text = text.trim();
    if(!text) return;
    inp.value = '';
    qr.innerHTML = '';
    addUser(text);
    showTyping();
    const delay = 600 + Math.random()*500;
    setTimeout(()=>{
      hideTyping();
      const ans = findAnswer(text);
      if(ans){
        addBot(ans, true);
      } else {
        addBot('I\'m sorry, I couldn\'t find a specific answer for that. 🙏\n\nPlease try rephrasing, or contact us directly:\n📧 info@helparea.org\n📞 +91 9676543210', true);
      }
    }, delay);
  }

  document.getElementById('cb-send').addEventListener('click', ()=> sendMsg(inp.value));
  inp.addEventListener('keydown', e=>{ if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); sendMsg(inp.value); } });

  // Auto-open greeting badge after 8 seconds
  setTimeout(()=>{
    const badge = document.querySelector('#cb-btn .cb-badge');
    if(badge) badge.textContent = '?';
  }, 8000);
})();

