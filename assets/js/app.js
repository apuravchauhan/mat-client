var MatrimonialApp = angular.module('MATRIMONIAL-APP',['once','ngRoute']);
var cities = ["Achabal, Jammu and Kashmir","Achalpur, Maharashtra","Achhnera, Uttar Pradesh","Adari, Uttar Pradesh","Adalaj, Gujarat","Adilabad, Andhra Pradesh","Adityana, Gujarat","Piriyapatna, Karnataka","Adoni, Andhra Pradesh","Adoor, Kerala","Adra, West Bengal","Afzalpura, Karnataka","Agartala, Tripura","Agra, Uttar Pradesh","Ahiwara, Chhattisgarh","Ahmedabad, Gujarat","Ahmedgarh, Punjab","Ahmednagar, Maharashtra","Ahmedpur, Maharashtra","Aizawl, Mizoram","Ajmer, Rajasthan","Ajra, Maharashtra","Akaltara, Chhattisgarh","Akbarpur, Uttar Pradesh","Akathiyoor, Kerala","Akhnoor, Jammu and Kashmir","Akkalkot, Maharashtra","Akola, Maharashtra","Akot, Maharashtra","Aland, Karnataka","Alandi, Maharashtra","Alang, Gujarat","Alappuzha, Kerala","Aldona, Goa","Alibag, Maharashtra","Aligarh, Uttar Pradesh","Alipurduar, West Bengal","Allahabad, Uttar Pradesh","Almora, Uttarakhand","Aalanavara, Karnataka","Along, Arunachal Pradesh","Alur, Karnataka","Alwar, Rajasthan","Amadalavalasa, Andhra Pradesh","Amalapuram, Andhra Pradesh","Amalner, Maharashtra","Amarpur, Bihar","Ambad, Maharashtra","Ambagarh Chowki, Chhattisgarh","Ambaji, Gujarat","Ambaliyasan, Gujarat","Ambejogai, Maharashtra","Ambikanagar, Karnataka","Ambikapur, Chhattisgarh","Ambivali Tarf Wankhal, Maharashtra","Amguri, Assam","Amini, Lakshadweep","Amlabad, Jharkhand","Amli, Dadra and Nagar Haveli","Amravati, Maharashtra","Amreli, Gujarat","Amritsar, Punjab","Amroha, Uttar Pradesh","Anakapalle, Andhra Pradesh","Anand, Gujarat","Anandapur, Odisha","Anand Nagar, Assam","Anantapur, Andhra Pradesh","Anantnag, Jammu and Kashmir","Ancharakandy, Kerala","Andada, Gujarat","Anekal, Karnataka","Ankola, Karnataka","Anjar, Gujarat","Anjangaon, Maharashtra","Anklav, Gujarat","Ankleshwar, Gujarat","Annigeri, Karnataka","Anugul, Odisha","Ara, Jharkhand","Arambhada, Gujarat","Arakkonam, Tamil Nadu","Araria, Bihar","Arang, Chhattisgarh","Arambagh, West Bengal","Arsikere, Karnataka","Arcot, Tamil Nadu","Areraj, Bihar","Ariyalur, Tamil Nadu","Arkalgud, Karnataka","Arki, Himachal Pradesh","Arnia, Jammu and Kashmir","Aroor, Kerala","Arrah, Bihar","Aruppukkottai, Tamil Nadu","Arvi, Maharashtra","Arwal, Bihar","Asan Khurd, Haryana","Asansol, West Bengal","Asarganj, Bihar","Ashok Nagar, Madhya Pradesh","Ashta, Maharashtra","Ashtamichira, Kerala","Asika, Odisha","Asola, Delhi","Assandh, Haryana","Ateli, Haryana","Athni, Karnataka","Attingal, Kerala","Atul, Gujarat","Aurad, Karnataka","Aurangabad, Bihar","Aurangabad, Maharashtra","Ausa, Maharashtra","Avinissery, Kerala","Awantipora, Jammu and Kashmir","Azamgarh, Uttar Pradesh","Azmatgarh, Uttar Pradesh","Babaleshwar, Karnataka","Babiyal, Haryana","Baddi, Himachal Pradesh","Bade Bacheli, Chhattisgarh","Badaun, Uttar Pradesh","Badagaon, Madhya Pradesh","Badepalle, Andhra Pradesh","Badharghat, Tripura","Bagaha, Bihar","Bageshwar, Uttarakhand","Bahadurgarh, Haryana","Bahadurganj, Bihar","Baharampur, West Bengal","Bahraich, Uttar Pradesh","Bairgania, Bihar","Bakhtiarpur, Bihar","Balaghat, Madhya Pradesh","Balangir, Odisha","Balasore, Odisha","Baleshwar, Odisha","Bawana, Delhi","Bhiwadi, Rajasthan","Bali, Rajasthan","Bally, West Bengal","Ballabhgarh, Haryana","Ballia, Uttar Pradesh","Balod, Chhattisgarh","Baloda Bazar, Chhattisgarh","Balrampur, Uttar Pradesh","Balurghat, West Bengal","Bamra, Odisha","Bandikui, Rajasthan","Bandipore, Jammu and Kashmir","Bangalore, Karnataka","Banganapalle, Andhra Pradesh","Banka, Bihar","Banmankhi Bazar, Bihar","Banswara, Rajasthan","Bankura, West Bengal","Bapatla, Andhra Pradesh","Barakar, West Bengal","Barahiya, Bihar","Baramati, Maharashtra","Baramula, Jammu and Kashmir","Baran, Rajasthan","Barasat, West Bengal","Bardhaman, West Bengal","Barauli, Bihar","Barbigha, Bihar","Bareilly, Uttar Pradesh","Barughutu, Jharkhand","Basna, Chhattisgarh","Barbil, Odisha","Bargarh, Odisha","Barh, Bihar","Baripada, Odisha","Barmer, Rajasthan","Barnala, Punjab","Barpeta, Assam","Barpeta Road, Assam","Barrackpur, West Bengal","Barwani, Madhya Pradesh","Barwala, Haryana","Basavan Bagevadi, Karnataka","Basudebpur, Odisha","Batala, Punjab","Bathinda, Punjab","Bawal, Haryana","Bazpur, Uttarakhand","Beawar, Rajasthan","Begusarai, Bihar","Behea, Bihar","Belgaum, Karnataka","Bellampalle, Andhra Pradesh","Ballary, Karnataka","Belpahar, Odisha","Bemetra, Chhattisgarh","Berinag, Uttarakhand","Bethamcherla, Andhra Pradesh","Bettiah, Bihar","Betul, Madhya Pradesh","Bhabua, Bihar","Bhadrachalam, Andhra Pradesh","Bhadrak, Odisha","Bhagalpur, Bihar","Bhagha Purana, Punjab","Bhainsa, Andhra Pradesh","Bhajanpura, Delhi","Bhandara, Maharashtra","Bharatpur, Rajasthan","Bharthana, Uttar Pradesh","Bharuch, Gujarat","Bhatapara, Chhattisgarh","Bhavani, Tamil Nadu","Bhavnagar, Gujarat","Bhawanipatna, Odisha","Bheemunipatnam, Andhra Pradesh","Bhilai, Chhattisgarh","Bhilwara, Rajasthan","Bhimavaram, Andhra Pradesh","Bhinmal, Rajasthan","Bhiwandi, Maharashtra","Bhiwani, Haryana","Bhongir, Andhra Pradesh","Bhopal, Madhya Pradesh","Bhuban, Odisha","Bhubaneswar, Odisha","Bhuj, Gujarat","Bhusawal, Maharashtra","Bidar, Karnataka","Bidhan Nagar, West Bengal","Bihar Sharif, Bihar","Bijapur, Karnataka","Bijbehara, Jammu and Kashmir","Bijnor, Uttar Pradesh","Bikaner, Rajasthan","Bikramganj, Bihar","Bilara, Rajasthan","Bilasipara, Assam","Bilaspur, Chhattisgarh","Bilaspur, Himachal Pradesh","Biramitrapur, Odisha","Birgaon, Chhattisgarh","Bobbili, Andhra Pradesh","Bodhan, Andhra Pradesh","Bodh Gaya, Bihar","Bokaro Steel City, Jharkhand","Bongaigaon City, Assam","Bomdila, Arunachal Pradesh","Brahmapur, Odisha","Brajrajnagar, Odisha","Budaun, Uttar Pradesh","Budhlada, Punjab","Bulandshahr, Uttar Pradesh","Burhanpur, Madhya Pradesh","Burla, Odisha","Buxar, Bihar","Byasanagar, Odisha","Chadchan, Karnataka","Chaibasa, Jharkhand","Chakeri, Uttar Pradesh","Chakradharpur, Jharkhand","Chalisgaon, Maharashtra","Chamba, Himachal Pradesh","Chamba, Uttarakhand","Champa, Chhattisgarh","Champawat, Uttarakhand","Champhai, Mizoram","Chamarajanagara, Karnataka","Chandigarh, Chandigarh","Chandil, Jharkhand","Chandauli, Uttar Pradesh","Chandausi, Uttar Pradesh","Chandrapura, Jharkhand","Chanpatia, Bihar","Charkhi Dadri, Haryana","Chapirevula, Andhra Pradesh","Chatra, Jharkhand","Charkhari, Uttar Pradesh","Chalakudy, Kerala","Chandrapur, Maharashtra","Changanassery, Kerala","Cheeka, Haryana","Chendamangalam, Kerala","Chengalpattu, Tamil Nadu","Chengannur, Kerala","Chennai, Tamil Nadu","Cherthala, Kerala","Cheruthazham, Kerala","Chhapra, Bihar","Chhatarpur, Madhya Pradesh","Chhindwara, Madhya Pradesh","Chikkodi, Karnataka","Chikkamagalur, Karnataka","Chilakaluripet, Andhra Pradesh","Chinchani, Maharashtra","Chinnasalem, Tamil Nadu","Chinthaamani, Karnataka","Chiplun, Maharashtra","Chirala, Andhra Pradesh","Chirkunda, Jharkhand","Chirmiri, Chhattisgarh","Chinsura, West Bengal","Chitradurga, Karnataka","Chittur-Thathamangalam, Kerala","Chitrakoot, Madhya Pradesh","Chittoor, Andhra Pradesh","Chockli, Kerala","Churi, Jharkhand","Churu, Rajasthan","Coimbatore, Tamil Nadu","Colgong, Bihar","Contai, West Bengal","Cooch Behar, West Bengal","Coonoor, Tamil Nadu","Cuddalore, Tamil Nadu","Cuddapah, Andhra Pradesh","Curchorem Cacora, Goa","Cuttack, Odisha","Chikkaballapura, Karnataka","Chandan Bara, Bihar","Chaukori, Uttarakhand","Dabra, Madhya Pradesh","Dadri, Uttar Pradesh","Dahod, Gujarat","Dalhousie, Himachal Pradesh","Dalkhola, West Bengal","Dalli-Rajhara, Chhattisgarh","Dalsinghsarai, Bihar","Daltonganj, Jharkhand","Daman and Diu, Daman and Diu","Damoh, Madhya Pradesh","Darbhanga, Bihar","Darjeeling, West Bengal","Dasua, Punjab","Datia, Madhya Pradesh","Daudnagar, Bihar","Daund, Maharashtra","Davanagere, Karnataka","Debagarh, Odisha","Deesa, Gujarat","Dehegam, Gujarat","Dehradun, Uttarakhand","Dehri-on-Sone, Bihar","Delhi, Delhi","Deoghar, Jharkhand","Deoria, Uttar Pradesh","Devarakonda, Andhra Pradesh","Devar Hipparagi, Karnataka","Devgarh, Maharashtra","Devgarh, Rajasthan","Dewas, Madhya Pradesh","Dhampur, Uttar Pradesh","Dhamtari, Chhattisgarh","Dhanbad, Jharkhand","Dhar, Madhya Pradesh","Dharampur, Gujarat","Dharamsala, Himachal Pradesh","Dharmanagar, Tripura","Dharmapuri, Tamil Nadu","Dharmavaram, Andhra Pradesh","Dharwad, Karnataka","Dhekiajuli, Assam","Dhenkanal, Odisha","Dholka, Gujarat","Dhoraji, Gujarat","Dhubri, Assam","Dhule, Maharashtra","Dhulian, West Bengal","Dhuri, Punjab","Dibrugarh, Assam","Digboi, Assam","Dighwara, Bihar","Dimapur, Nagaland","Dinanagar, Punjab","Dindigul, Tamil Nadu","Diphu, Assam","Dipka, Chhattisgarh","Dispur, Assam","Dombivli, Maharashtra","Dongargarh, Chhattisgarh","Duliajan Oil Town, Assam","Dumdum, West Bengal","Dumka, Jharkhand","Dumraon, Bihar","Durg-Bhilai Nagar, Chhattisgarh","Durgapur, Maharashtra","Durgapur, West Bengal","Dwarka, Gujarat","Ellenabad, Haryana","Eluru, Andhra Pradesh","Erattupetta, Kerala","Erode, Tamil Nadu","Etah, Uttar Pradesh","Etawah, Uttar Pradesh","English Bazar, West Bengal","Edathua, Kerala","Faizabad, Uttar Pradesh","Falna, Rajasthan","Faridabad, Haryana","Faridkot, Punjab","Farooqnagar, Andhra Pradesh","Farrukhabad, Uttar Pradesh","Fatehabad, Haryana","Fatehabad, Madhya Pradesh","Fatehabad, Uttar Pradesh","Fatehgarh, Uttar Pradesh","Fatehpur Chaurasi, Uttar Pradesh","Fatehpur Sikri, Uttar Pradesh","Fatehpur, Rajasthan","Fatehpur, Uttar Pradesh","Fatehpur, Uttar Pradesh","Fatwah, Bihar","Fazilka, Punjab","Forbesganj, Bihar","Firozabad, Uttar Pradesh","Firozpur, Punjab","Firozpur Cantt., Punjab","Gadarwara, Madhya Pradesh","Gadhaga/Gadag, Karnataka","Gadchiroli, Maharashtra","Gadwal, Andhra Pradesh","Ganaur, Haryana","Gandhidham, Gujarat","Gandhinagar, Gujarat","Gangtok, Sikkim","Ganjam, Odisha","Garhwa, Jharkhand","Gauripur, Assam","Gauribidanur, Karnataka","Gaya, Bihar","Gharaunda, Haryana","Ghatampur, Uttar Pradesh","Ghatanji, Maharashtra","Ghatshila, Jharkhand","Ghaziabad, Uttar Pradesh","Ghazipur, Uttar Pradesh","Giddarbaha, Punjab","Gingee, Tamil Nadu","Giridih, Jharkhand","Goa Velha, Goa","Goalpara, Assam","Gobichettipalayam, Tamil Nadu","Gobindgarh, Punjab","Gobranawapara, Chhattisgarh","Godda, Jharkhand","Godhra, Gujarat","Gogri Jamalpur, Bihar","Gohana, Haryana","Gokak, Karnataka","Golaghat, Assam","Gomoh, Jharkhand","Gondiya, Maharashtra","Gooty, Andhra Pradesh","Gopalganj, Bihar","Gorakhpur, Uttar Pradesh","Greater Noida, Uttar Pradesh","Gudalur, Tamil Nadu","Gudalur, Tamil Nadu","Gudalur, Tamil Nadu","Gudivada, Andhra Pradesh","Gudur, Andhra Pradesh","Gulbarga, Karnataka","Gumia, Jharkhand","Gumla, Jharkhand","Guna, Madhya Pradesh","Gundlupet, Karnataka","Guntakal, Andhra Pradesh","Guntur, Andhra Pradesh","Gunupur, Odisha","Gurdaspur, Punjab","Gurgaon, Haryana","Guruvayoor, Kerala","Guwahati, Assam","Gwalior, Madhya Pradesh","Haflong, Assam","Hailakandi, Assam","Hajipur, Bihar","Haldia, West Bengal","Haldwani, Uttarakhand","Hamirpur, Himachal Pradesh","Hamirpur, Uttar Pradesh","Hansi, Haryana","Hanuman Junction, Andhra Pradesh","Hanumangarh, Rajasthan","Hapur, Uttar Pradesh","Harda, Madhya Pradesh","Hardoi, Uttar Pradesh","Haridwar, Uttarakhand","Haripad, Kerala","Harsawa, Rajasthan","Harur, Tamil Nadu","Haasana, Karnataka","Hastinapur, Uttar Pradesh","Hathras, Uttar Pradesh","Hazaribagh, Jharkhand","Hilsa, Bihar","Himatnagar, Gujarat","Hindupur, Andhra Pradesh","Hinjilicut, Odisha","Hisar, Haryana","Hisua, Bihar","Hodal, Haryana","Hojai, Assam","Hoshiarpur, Punjab","Hosapet, Karnataka","Howrah, West Bengal","Hubbali, Karnataka","Hukkeri, Karnataka","Hugli-Chuchura, West Bengal","Hussainabad, Jharkhand","Hyderabad, Andhra Pradesh","Ichalkaranji, Maharashtra","Ichchapuram, Andhra Pradesh","Idar, Gujarat","Imphal, Manipur","Indirapuram, Uttar Pradesh","Indi, Karnataka","Indore, Madhya Pradesh","Indranagar, Tripura","Irinjalakuda, Kerala","Islampur, Bihar","Islampur, West Bengal","Itanagar, Arunachal Pradesh","Itarsi, Madhya Pradesh","Idukki, Kerala","Jabalpur, Madhya Pradesh","Jagadhri, Haryana","Jagatsinghapur, Odisha","Jagdalpur, Chhattisgarh","Jagdispur, Bihar","Jaggaiahpet, Andhra Pradesh","Jagraon, Punjab","Jagtial, Andhra Pradesh","Jaipur, Rajasthan","Jais, Uttar Pradesh","Jaisalmer, Rajasthan","Jaitaran, Rajasthan","Jaitu, Punjab","Jajapur, Odisha","Jajmau, Uttar Pradesh","Jalalabad, Punjab","Jalna, Maharashtra","Jalandhar Cantt., Punjab","Jalandhar, Punjab","Jaleswar, Odisha","Jalgaon, Maharashtra","Jalpaiguri, West Bengal","Jalore, Rajasthan","Jamalpur, Bihar","Jammalamadugu, Andhra Pradesh","Jammu, Jammu and Kashmir","Jamnagar, Gujarat","Jamshedpur, Jharkhand","Jamtara, Jharkhand","Jamui, Bihar","Jandiala, Punjab","Jangaon, Andhra Pradesh","Janjgir, Chhattisgarh","Jashpurnagar, Chhattisgarh","Jaspur, Uttarakhand","Jatani, Odisha","Jaunpur, Uttar Pradesh","Jayankondam, Tamil Nadu","Jehanabad, Bihar","Jeypur, Odisha","Jhabua, Madhya Pradesh","Jhajha, Bihar","Jhajjar, Haryana","Jhalawar, Rajasthan","Jhanjharpur, Bihar","Jhansi, Uttar Pradesh","Jhargram, West Bengal","Jharsuguda, Odisha","Jhumri Tilaiya, Jharkhand","Jhunjhunu, Rajasthan","Jind, Haryana","Joda, Odisha","Jodhpur, Rajasthan","Jogabani, Bihar","Jogendranagar, Tripura","Jorhat, Assam","Jowai, Meghalaya","Junagadh, Gujarat","Junnar, Maharashtra","Jhalda, West Bengal","Kadapa, Andhra Pradesh","Kadi, Gujarat","Kadiri, Andhra Pradesh","Kadirur, Kerala","Kagaznagar, Andhra Pradesh","Kailaras, Madhya Pradesh","Kailasahar, Tripura","Kaithal, Haryana","Kakching, Manipur","Kakinada, Andhra Pradesh","Kalan Wali, Haryana","Kalavad, Gujarat","Kalburgi, Karnataka","Kalimpong, West Bengal","Kalka, Haryana","Kalliasseri, Kerala","Kalpi, Uttar Pradesh","Kalol, Gujarat","Kalpetta, Kerala","Kalyan, Maharashtra","Kalyandurg, Andhra Pradesh","Kamareddy, Andhra Pradesh","Kamthi, Maharashtra","Kanchipuram, Tamil Nadu","Kanda, Uttarakhand","Kandukur, Andhra Pradesh","Kanhangad, Kerala","Kanjikkuzhi, Kerala","Kanker, Chhattisgarh","Kannur, Kerala","Kanpur, Uttar Pradesh","Kantabanji, Odisha","Kanti, Bihar","Kapadvanj, Gujarat","Kapurthala, Punjab","Karad, Maharashtra","Karaikal, Puducherry","Karaikudi, Tamil Nadu","Karanjia, Odisha","Karimganj, Assam","Karimnagar, Andhra Pradesh","Karjan, Gujarat","Karjat, Maharashtra","Kaarkala, Karnataka","Karnal, Haryana","Karoran, Punjab","Kartarpur, Punjab","Karur, Tamil Nadu","Karungal, Tamil Nadu","Karwar, Karnataka","Kasaragod, Kerala","Kashipur, Uttarakhand","Kathua, Jammu and Kashmir","Katihar, Bihar","Katni, Madhya Pradesh","Katra, Jammu and Kashmir","Kavali, Andhra Pradesh","Kavaratti, Lakshadweep","Kawardha, Chhattisgarh","Kayamkulam, Kerala","Kendrapara, Odisha","Kendujhar, Odisha","Keshod, Gujarat","Keylong, Himachal Pradesh","Khagaria, Bihar","Khalilabad, Uttar Pradesh","Khambhalia, Gujarat","Khambhat, Gujarat","Khammam, Andhra Pradesh","Khanna, Punjab","Kharagpur, Bihar","Kharagpur, West Bengal","Kharar, Punjab","Kheda, Gujarat","Khedbrahma, Gujarat","Kheralu, Gujarat","Kheri, Uttar Pradesh","Khordha, Odisha","Khowai, Tripura","Khunti, Jharkhand","Khurai, Madhya Pradesh","kichha, Uttarakhand","Kishanganj, Bihar","Kochi, Kerala","Kodad, Andhra Pradesh","Kodinar, Gujarat","Kodungallur, Kerala","Kohima, Nagaland","Kokrajhar, Assam","Kolar, Karnataka","Kolhar, Karnataka","Kolhapur, Maharashtra","Kolkata, West Bengal","Kollam, Kerala","Kollankodu, Tamil Nadu","Kondagaon, Chhattisgarh","Konnagar, West Bengal","Koothuparamba, Kerala","Koraput, Odisha","Korba, Chhattisgarh","Koratla, Andhra Pradesh","Kot Kapura, Punjab","Kota, Karnataka","Kota, Rajasthan","Kota, Uttar Pradesh","Kotdwara, Uttarakhand","Kothagudem, Andhra Pradesh","Kothamangalam, Kerala","Kothapeta, Andhra Pradesh","Kotma, Madhya Pradesh","Kottayam, Kerala","Kovvur, Andhra Pradesh","Kozhikode, Kerala","Kozhencherry, Kerala","Krishnanagar, West Bengal","Kuchinda, Odisha","Kulpahar, Uttar Pradesh","Kunnamkulam, Kerala","Kurali, Punjab","Kurnool, Andhra Pradesh","Kurukshetra, Haryana","Kyathampalle, Andhra Pradesh","Kalyani, West Bengal","Lachhmangarh, Rajasthan","Ladnu, Rajasthan","Ladwa, Haryana","Lahar, Madhya Pradesh","Laharpur, Uttar Pradesh","Lakheri, Rajasthan","Lakhimpur, Uttar Pradesh","Lakhisarai, Bihar","Lakshmeshwara, Karnataka","Lal Gopalganj Nindaura, Uttar Pradesh","Lalganj, Bihar","Lalgudi, Tamil Nadu","Lalitpur, Uttar Pradesh","Lalganj, Uttar Pradesh","Lalsot, Rajasthan","Lanka, Assam","Lar, Uttar Pradesh","Lathi, Gujarat","Latur, Maharashtra","Leh, Jammu and Kashmir","Lilong, Manipur","Limbdi, Gujarat","Lingsugur, Karnataka","Loha, Maharashtra","Lohardaga, Jharkhand","Lonar, Maharashtra","Lonavla, Maharashtra","Longowal, Punjab","Loni, Uttar Pradesh","Losal, Rajasthan","Lucknow, Uttar Pradesh","Ludhiana, Punjab","Lumding, Assam","Lunawada, Gujarat","Lunglei, Mizoram","Macherla, Andhra Pradesh","Machilipatnam, Andhra Pradesh","Madanapalle, Andhra Pradesh","Maddur, Karnataka","Margao, Goa","Madhepura, Bihar","Madhubani, Bihar","Madhugiri, Karnataka","Madhupur, Jharkhand","Madhyamgram, Odisha","Madikeri, Karnataka","Madurai, Tamil Nadu","Magadi, Karnataka","Mahabaleswar, Maharashtra","Mahad, Maharashtra","Mahbubnagar, Andhra Pradesh","Mahalingapura, Karnataka","Maharajganj, Bihar","Maharajpur, Madhya Pradesh","Mahasamund, Chhattisgarh","Mahe, Puducherry","Mahendragarh, Chhattisgarh","Mahendragarh, Haryana","Mahesana, Gujarat","Mahidpur, Madhya Pradesh","Mahnar Bazar, Bihar","Mahoba, Uttar Pradesh","Mahuva, Gujarat","Mahwa, Rajasthan","Maihar, Madhya Pradesh","Mainaguri, West Bengal","Makhdumpur, Bihar","Makrana, Rajasthan","Mal, West Bengal","Malajkhand, Madhya Pradesh","Malappuram, Kerala","Malavalli, Karnataka","Malegaon, Maharashtra","Malerkotla, Punjab","Malkangiri, Odisha","Malkapur, Maharashtra","Malout, Punjab","Malpura, Rajasthan","Malur, Karnataka","Manasa, Madhya Pradesh","Manavadar, Gujarat","Manawar, Madhya Pradesh","Manchar, Maharashtra","Mancherial, Andhra Pradesh","Mandalgarh, Rajasthan","Mandamarri, Andhra Pradesh","Mandapeta, Andhra Pradesh","Mandawa, Rajasthan","Mandi, Himachal Pradesh","Mandi Dabwali, Haryana","Mandideep, Madhya Pradesh","Mandla, Madhya Pradesh","Mandsaur, Madhya Pradesh","Mandvi, Gujarat","Mandya, Karnataka","Maner, Bihar","Manesar, Haryana","Mangalagiri, Andhra Pradesh","Mangaldoi, Assam","Mangalore, Karnataka","Mangalvedhe, Maharashtra","Manglaur, Uttarakhand","Mangrol, Gujarat","Mangrol, Rajasthan","Mangrulpir, Maharashtra","Manihari, Bihar","Manjlegaon, Maharashtra","Mankachar, Assam","Manmad, Maharashtra","Mansa, Punjab","Mansa, Gujarat","Manuguru, Andhra Pradesh","Manvi, Karnataka","Manwath, Maharashtra","Mapusa, Goa","Margao, Goa","Margherita, Assam","Marhaura, Bihar","Mariani, Assam","Marigaon, Assam","Markapur, Andhra Pradesh","Marmagao, Goa","Masaurhi, Bihar","Mathabhanga, West Bengal","Mathura, Uttar Pradesh","Mattannur, Kerala","Mauganj, Madhya Pradesh","Maur, Punjab","Mavelikkara, Kerala","Mavoor, Kerala","Mayang Imphal, Manipur","Medak, Andhra Pradesh","Medinipur, West Bengal","Meerut, Uttar Pradesh","Mehkar, Maharashtra","Mahemdavad, Gujarat","Memari, West Bengal","Merta City, Rajasthan","Mhaswad, Maharashtra","Mhow Cantonment, Madhya Pradesh","Mhowgaon, Madhya Pradesh","Mihijam, Jharkhand","Mira-Bhayandar, Maharashtra","Miraj, Maharashtra","Mirganj, Bihar","Miryalaguda, Andhra Pradesh","Mirzapur, Uttar Pradesh","Mithapur, Gujarat","Modasa, Gujarat","Modinagar, Uttar Pradesh","Moga, Punjab","Mogalthur, Andhra Pradesh","Mohali, Punjab","Mohania, Bihar","Mokama, Bihar","Mokameh, Bihar","Mokokchung, Nagaland","Monoharpur, West Bengal","Moradabad, Uttar Pradesh","Morena, Madhya Pradesh","Morinda, Punjab","Morshi, Maharashtra","Morvi, Gujarat","Motihari, Bihar","Motipur, Bihar","Mount Abu, Rajasthan","Mudalagi, Karnataka","Mudabidri, Karnataka","Muddebihal, Karnataka","Mudhol, Karnataka","Mukatsar, Punjab","Mukerian, Punjab","Mukhed, Maharashtra","Muktsar, Punjab","Mul, Maharashtra","Mulbagal, Karnataka","Multai, Madhya Pradesh","Mumbai, Maharashtra","Mundi, Madhya Pradesh","Mundargi, Karnataka","Mungeli, Chhattisgarh","Munger, Bihar","Muradnagar, Uttar Pradesh","Murliganj, Bihar","Murshidabad, West Bengal","Murtijapur, Maharashtra","Murwara, Madhya Pradesh","Musabani, Jharkhand","Mussoorie, Uttarakhand","Muvattupuzha, Kerala","Muzaffarnagar, Uttar Pradesh","Muzaffarpur, Bihar","Mysore, Karnataka","Meethari Marwar, Rajasthan","Nabadwip, West Bengal","Nabarangapur, Odisha","Nabha, Punjab","Nadbai, Rajasthan","Nadiad, Gujarat","Nidagundi, Karnataka","Nagaon, Assam","Nagapattinam, Tamil Nadu","Nagar, Rajasthan","Nagari, Andhra Pradesh","Nagarkurnool, Andhra Pradesh","Nagaur, Rajasthan","Nagda, Madhya Pradesh","Nagercoil, Tamil Nadu","Nagina, Uttar Pradesh","Nagla, Uttarakhand","Nagpur, Maharashtra","Nahan, Himachal Pradesh","Naharlagun, Arunachal Pradesh","Naihati, West Bengal","Naila Janjgir, Chhattisgarh","Nainital, Uttarakhand","Nainpur, Madhya Pradesh","Najafgarh, Delhi","Najibabad, Uttar Pradesh","Nakodar, Punjab","Nakur, Uttar Pradesh","Nalasopara, Maharashtra","Nalanda, Bihar","Nalbari, Assam","Namagiripettai, Tamil Nadu","Namakkal, Tamil Nadu","Nanded-Waghala, Maharashtra","Nandgaon, Maharashtra","Nandivaram-Guduvancheri, Tamil Nadu","Nandura, Maharashtra","Nandurbar, Maharashtra","Nandyal, Andhra Pradesh","Nangal, Punjab","Nanjangud, Karnataka","Nanjikottai, Tamil Nadu","Nanpara, Uttar Pradesh","Narasapur, Andhra Pradesh","Narasaraopet, Andhra Pradesh","Naraura, Uttar Pradesh","Narayanpet, Andhra Pradesh","Narela, Delhi","Nargund, Rajasthan","Narkatiaganj, Bihar","Narkhed, Maharashtra","Narnaul, Haryana","Narsinghgarh, Madhya Pradesh","Narsinghgarh, Madhya Pradesh","Narsipatnam, Andhra Pradesh","Narwana, Haryana","Nashik, Maharashtra","Nasirabad, Rajasthan","Natham, Tamil Nadu","Nathdwara, Rajasthan","Naugachhia, Bihar","Naugawan Sadat, Uttar Pradesh","Nautanwa, Uttar Pradesh","Navalgund, Rajasthan","Navi Mumbai, Maharashtra","Navsari, Gujarat","Nawabganj, Uttar Pradesh","Nawada, Bihar","Nawagarh, Chhattisgarh","Nawalgarh, Rajasthan","Nawanshahr, Punjab","Nawapur, Maharashtra","Nedumangad, Kerala","Neem-Ka-Thana, Rajasthan","Neemuch, Madhya Pradesh","Nehtaur, Uttar Pradesh","Nelamangala, Rajasthan","Nellikuppam, Tamil Nadu","Nellore, Andhra Pradesh","Nepanagar, Madhya Pradesh","New Delhi, Delhi","Neyveli, Tamil Nadu","Neyyattinkara, Kerala","Nidadavole, Andhra Pradesh","Nilanga, Maharashtra","Nilambur, Kerala","Nimbahera, Rajasthan","Nippani, Karnataka","Nirmal, Andhra Pradesh","Niwai, Rajasthan","Niwari, Madhya Pradesh","Nizamabad, Andhra Pradesh","Nohar, Rajasthan","Noida, Uttar Pradesh","Nokha, Bihar","Nokha, Rajasthan","Nongstoin, Meghalaya","Noorpur, Uttar Pradesh","North Lakhimpur, Assam","Nowgong, Madhya Pradesh","Nowrozabad, Madhya Pradesh","Nuzvid, Andhra Pradesh","O' Valley, Tamil Nadu","Oddanchatram, Tamil Nadu","Obra, Uttar Pradesh","Ongole, Andhra Pradesh","Orai, Uttar Pradesh","Osmanabad, Maharashtra","Ottappalam, Kerala","Ozar, Maharashtra","P.N.Patti, Tamil Nadu","Pachora, Maharashtra","Pachore, Madhya Pradesh","Pacode, Tamil Nadu","Padmanabhapuram, Tamil Nadu","Padra, Gujarat","Padrauna, Uttar Pradesh","Paithan, Maharashtra","Pakaur, Jharkhand","Palacole, Andhra Pradesh","Palai, Kerala","Palakkad, Kerala","Palani, Tamil Nadu","Palanpur, Gujarat","Palasa Kasibugga, Andhra Pradesh","Palghar, Maharashtra","Pali, Rajasthan","Pali, Madhya Pradesh","Palia Kalan, Uttar Pradesh","Palitana, Gujarat","Pondur, Andhra Pradesh","Palladam, Tamil Nadu","Pallapatti, Tamil Nadu","Pallikonda, Tamil Nadu","Palwal, Haryana","Palwancha, Andhra Pradesh","Panagar, Madhya Pradesh","Panagudi, Tamil Nadu","Panaji, Goa","Panamattom, Kerala","Panchkula, Haryana","Panchla, West Bengal","Pandharkaoda, Maharashtra","Pandharpur, Maharashtra","Pandhurna, Madhya Pradesh","Pandua, West Bengal","Panipat, Haryana","Panna, Madhya Pradesh","Panniyannur, Kerala","Panruti, Tamil Nadu","Panvel, Maharashtra","Pappinisseri, Kerala","Paradip, Odisha","Paramakudi, Tamil Nadu","Parangipettai, Tamil Nadu","Parasi, Uttar Pradesh","Paravoor, Kerala","Parbhani, Maharashtra","Pardi, Gujarat","Parlakhemundi, Odisha","Parli, Maharashtra","Parola, Maharashtra","Partur, Maharashtra","Parvathipuram, Andhra Pradesh","Pasan, Madhya Pradesh","Paschim Punropara, West Bengal","Pasighat, Arunachal Pradesh","Patan, Gujarat","Pathanamthitta, Kerala","Pathankot, Punjab","Pathardi, Maharashtra","Pathri, Maharashtra","Patiala, Punjab","Patna, Bihar","Patran, Punjab","Patratu, Jharkhand","Pattamundai, Odisha","Patti, Punjab","Pattukkottai, Tamil Nadu","Patur, Maharashtra","Pauni, Maharashtra","Pauri, Uttarakhand","Pavagada, Karnataka","Pedana, Andhra Pradesh","Peddapuram, Andhra Pradesh","Pehowa, Haryana","Pen, Maharashtra","Penuganchiprolu, Andhra Pradesh","Perambalur, Tamil Nadu","Peravurani, Tamil Nadu","Peringathur, Kerala","Perinthalmanna, Kerala","Periyakulam, Tamil Nadu","Periyasemur, Tamil Nadu","Pernampattu, Tamil Nadu","Perumbavoor, Kerala","Petlad, Gujarat","Phagwara, Punjab","Phalodi, Rajasthan","Phaltan, Maharashtra","Phillaur, Punjab","Phulabani, Odisha","Phulera, Rajasthan","Phulpur, Uttar Pradesh","Phusro, Jharkhand","Pihani, Uttar Pradesh","Pilani, Rajasthan","Pilibanga, Rajasthan","Pilibhit, Uttar Pradesh","Pilkhuwa, Uttar Pradesh","Pindwara, Rajasthan","Pinjore, Haryana","Pipar City, Rajasthan","Pipariya, Madhya Pradesh","Piro, Bihar","Pithampur, Madhya Pradesh","Pithapuram, Andhra Pradesh","Pithoragarh, Uttarakhand","Pollachi, Tamil Nadu","Polur, Tamil Nadu","Pondicherry, Puducherry","Ponkunnam, Kerala","Ponnani, Kerala","Ponneri, Tamil Nadu","Ponnur, Andhra Pradesh","Porbandar, Gujarat","Porsa, Madhya Pradesh","Port Blair, Andaman and Nicobar Islands","Powayan, Uttar Pradesh","Prantij, Rajasthan","Pratapgarh, Rajasthan","Pratapgarh, Tripura","Prithvipur, Madhya Pradesh","Proddatur, Andhra Pradesh","Pudukkottai, Tamil Nadu","Pudupattinam, Tamil Nadu","Pukhrayan, Uttar Pradesh","Pulgaon, Maharashtra","Puliyankudi, Tamil Nadu","Punalur, Kerala","Punch, Jammu and Kashmir","Pune, Maharashtra","Punjaipugalur, Tamil Nadu","Punganur, Andhra Pradesh","Puranpur, Uttar Pradesh","Purna, Maharashtra","Puri, Odisha","Purnia, Bihar","Purquazi, Uttar Pradesh","Purulia, West Bengal","Purwa, Uttar Pradesh","Pusad, Maharashtra","Puthuppally, Kerala","Puttur, Andhra Pradesh","Qadian, Punjab","Quilandy, Kerala","Rabkavi Banhatti, Karnataka","Radhanpur, Gujarat","Rae Bareli, Uttar Pradesh","Rafiganj, Bihar","Raghogarh-Vijaypur, Madhya Pradesh","Raghunathpur, West Bengal","Raghunathganj, West Bengal","Rahatgarh, Madhya Pradesh","Raayachuru, Karnataka","Raiganj, West Bengal","Raigarh, Chhattisgarh","Ranipet, Tamil Nadu","Raikot, Punjab","Raipur, Chhattisgarh","Rairangpur, Odisha","Raisen, Madhya Pradesh","Raisinghnagar, Rajasthan","Rajagangapur, Odisha","Rajahmundry, Andhra Pradesh","Rajakhera, Rajasthan","Rajaldesar, Rajasthan","Rajam, Andhra Pradesh","Rajampet, Andhra Pradesh","Rajapalayam, Tamil Nadu","Rajauri, Jammu and Kashmir","Rajgarh (Alwar), Rajasthan","Rajgarh (Churu), Rajasthan","Rajgarh, Madhya Pradesh","Rajgir, Bihar","Rajkot, Gujarat","Rajnandgaon, Chhattisgarh","Rajpipla, Gujarat","Rajpura, Punjab","Rajsamand, Rajasthan","Rajula, Gujarat","Rajura, Maharashtra","Ramachandrapuram, Andhra Pradesh","Ramagundam, Andhra Pradesh","Ramanagar, Karnataka","Ramanathapuram, Tamil Nadu","Ramdurg, Karnataka","Rameshwaram, Tamil Nadu","Ramganj Mandi, Rajasthan","Ramgarh, Jharkhand","Ramngarh, Rajasthan","Ramnagar, Bihar","Ramnagar, Uttarakhand","Rampur, Uttar Pradesh","Rampur Maniharan, Uttar Pradesh","Rampur Maniharan, Uttar Pradesh","Rampura Phul, Punjab","Rampurhat, West Bengal","Ramtek, Maharashtra","Ranaghat, West Bengal","Ranavav, Gujarat","Ranchi, Jharkhand","Rangia, Assam","Rania, Haryana","Ranibennur, Karnataka","Rapar, Gujarat","Rasipuram, Tamil Nadu","Rasra, Uttar Pradesh","Ratangarh, Rajasthan","Rath, Uttar Pradesh","Ratia, Haryana","Ratlam, Madhya Pradesh","Ratnagiri, Maharashtra","Rau, Madhya Pradesh","Raurkela, Odisha","Raver, Maharashtra","Rawatbhata, Rajasthan","Rawatsar, Rajasthan","Raxaul Bazar, Bihar","Rayachoti, Andhra Pradesh","Rayadurg, Andhra Pradesh","Rayagada, Odisha","Reengus, Rajasthan","Rehli, Madhya Pradesh","Renigunta, Andhra Pradesh","Renukoot, Uttar Pradesh","Reoti, Uttar Pradesh","Repalle, Andhra Pradesh","Revelganj, Bihar","Rewa, Madhya Pradesh","Rewari, Haryana","Rishikesh, Uttarakhand","Risod, Maharashtra","Robertsganj, Uttar Pradesh","Robertson Pet, Karnataka","Rohtak, Haryana","Ron, Karnataka","Roorkee, Uttarakhand","Rosera, Bihar","Rudauli, Uttar Pradesh","Rudrapur, Uttarakhand","Rudrapur, Uttar Pradesh","Rupnagar (Ropar), Punjab","Sabalgarh, Madhya Pradesh","Sadabad, Uttar Pradesh","Sadalga, Karnataka","Sadasivpet, Andhra Pradesh","Sadri, Rajasthan","Sadulshahar, Rajasthan","Sadulpur, Rajasthan","Safidon, Haryana","Safipur, Uttar Pradesh","Sagar, Madhya Pradesh","Sagara, Karnataka","Sagwara, Rajasthan","Saharanpur, Uttar Pradesh","Saharsa, Bihar","Sahaspur, Uttar Pradesh","Sahaswan, Uttar Pradesh","Sahawar, Uttar Pradesh","Sahibganj, Jharkhand","Sahjanwa, Uttar Pradesh","Saidpur, Uttar Pradesh","Saiha, Mizoram","Sailu, Maharashtra","Sainthia, West Bengal","Sakaleshapura, Karnataka","Sakti, Chhattisgarh","Salaya, Gujarat","Salem, Tamil Nadu","Salur, Andhra Pradesh","Samalkha, Haryana","Samalkot, Andhra Pradesh","Samana, Punjab","Samastipur, Bihar","Sambalpur, Odisha","Sambhal, Uttar Pradesh","Sambhar, Rajasthan","Samdhan, Uttar Pradesh","Samthar, Uttar Pradesh","Sanand, Gujarat","Sanawad, Madhya Pradesh","Sanchore, Rajasthan","Sarsod, Haryana","Sindagi, Karnataka","Sandi, Uttar Pradesh","Sandila, Uttar Pradesh","Sandur, Karnataka","Sangamner, Maharashtra","Sangareddy, Andhra Pradesh","Sangaria, Rajasthan","Sangli, Maharashtra","Sangole, Maharashtra","Sangrur, Punjab","Sankarankovil, Tamil Nadu","Sankari, Tamil Nadu","Sankeshwara, Karnataka","Santipur, West Bengal","Sarangpur, Madhya Pradesh","Sardarshahar, Rajasthan","Sardhana, Uttar Pradesh","Sarni, Madhya Pradesh","Sasaram, Bihar","Sasvad, Maharashtra","Satana, Maharashtra","Satara, Maharashtra","Satna, Madhya Pradesh","Sathyamangalam, Tamil Nadu","Sattenapalle, Andhra Pradesh","Sattur, Tamil Nadu","Saunda, Jharkhand","Saundatti Yellamma, Karnataka","Sausar, Madhya Pradesh","Savarkundla, Gujarat","Savanur, Karnataka","Savner, Maharashtra","Sawai Madhopur, Rajasthan","Sawantwadi, Maharashtra","Sedam, Karnataka","Sehore, Madhya Pradesh","Sendhwa, Madhya Pradesh","Seohara, Uttar Pradesh","Seoni, Madhya Pradesh","Seoni-Malwa, Madhya Pradesh","Shahabad, Karnataka","Shahabad, Hardoi, Uttar Pradesh","Shahabad, Rampur, Uttar Pradesh","Shahade, Maharashtra","Shahbad, Haryana","Shahdol, Madhya Pradesh","Shahganj, Uttar Pradesh","Shahjahanpur, Uttar Pradesh","Shahapur, Karnataka","Shahpura, Rajasthan","Shahpura, Rajasthan","Shajapur, Madhya Pradesh","Shamgarh, Madhya Pradesh","Shamli, Uttar Pradesh","Shamsabad, Agra, Uttar Pradesh","Shamsabad, Farrukhabad, Uttar Pradesh","Shegaon, Maharashtra","Sheikhpura, Bihar","Shendurjana, Maharashtra","Shenkottai, Tamil Nadu","Sheoganj, Rajasthan","Sheohar, Bihar","Sheopur, Madhya Pradesh","Sherghati, Bihar","Sherkot, Uttar Pradesh","Shiggaon, Karnataka","Shikarpur, Karnataka","Shikarpur, Bulandshahr, Uttar Pradesh","Shikohabad, Uttar Pradesh","Shillong, Meghalaya","Shimla, Himachal Pradesh","Shivamogga, Karnataka","Shirdi, Maharashtra","Shirpur-Warwade, Maharashtra","Shirur, Maharashtra","Shishgarh, Uttar Pradesh","Shivpuri, Madhya Pradesh","Sholavandan, Tamil Nadu","Sholingur, Tamil Nadu","Shoranur, Kerala","Surapura, Karnataka","Shrigonda, Maharashtra","Shrirampur, Maharashtra","Srirangapatna, Karnataka","Shujalpur, Madhya Pradesh","Siana, Uttar Pradesh","Sibsagar, Assam","Siddipet, Andhra Pradesh","Sidhi, Madhya Pradesh","Sidhpur, Gujarat","Sidlaghatta, Karnataka","Sihor, Gujarat","Sihora, Madhya Pradesh","Sikanderpur, Uttar Pradesh","Sikandra Rao, Uttar Pradesh","Sikandrabad, Uttar Pradesh","Sikar, Rajasthan","Silao, Bihar","Silapathar, Assam","Silchar, Assam","Siliguri, West Bengal","Sillod, Maharashtra","Silvassa, Dadra and Nagar Haveli","Simdega, Jharkhand","Sindhagi, Karnataka","Sindhanur, Karnataka","Singapur, Andhra Pradesh","Singrauli, Madhya Pradesh","Sinnar, Maharashtra","Sira, Karnataka","Sircilla, Andhra Pradesh","Sirhind Fatehgarh Sahib, Punjab","Sirkali, Tamil Nadu","Sirohi, Rajasthan","Sironj, Madhya Pradesh","Sirsa, Haryana","Sirsaganj, Uttar Pradesh","Sirsi, Karnataka","Sirsi, Uttar Pradesh","Siruguppa, Karnataka","Sitamarhi, Bihar","Sitapur, Uttar Pradesh","Sitarganj, Uttarakhand","Sivaganga, Tamil Nadu","Sivagiri, Tamil Nadu","Sivakasi, Tamil Nadu","Siwan, Bihar","Sohagpur, Madhya Pradesh","Sohna, Haryana","Sojat, Rajasthan","Solan, Himachal Pradesh","Solapur, Maharashtra","Sonamukhi, West Bengal","Sonepur, Bihar","Songadh, Gujarat","Sonipat, Haryana","Sopore, Jammu and Kashmir","Soro, Odisha","Soron, Uttar Pradesh","Soyagaon, Maharashtra","Sri Madhopur, Rajasthan","Srikakulam, Andhra Pradesh","Srikalahasti, Andhra Pradesh","Srinagar, Jammu and Kashmir","Srinivaspur, Karnataka","Srisailam Project (Right Flank Colony) Township, Andhra Pradesh","Srirampore, West Bengal","Srivilliputhur, Tamil Nadu","Suar, Uttar Pradesh","Sugauli, Bihar","Sujangarh, Rajasthan","Sujanpur, Punjab","Sultanganj, Bihar","Sultanpur, Uttar Pradesh","Sumerpur, Rajasthan","Sumerpur, Uttar Pradesh","Sunabeda, Odisha","Sunam, Punjab","Sundargarh, Odisha","Sundarnagar, Himachal Pradesh","Supaul, Bihar","Surandai, Tamil Nadu","Surat, Gujarat","Suratgarh, Rajasthan","Suri, West Bengal","Suriyampalayam, Tamil Nadu","Suryapet, Andhra Pradesh","Tadepalligudem, Andhra Pradesh","Tadpatri, Andhra Pradesh","Taki, West Bengal","Talaja, Gujarat","Talcher, Odisha","Talegaon Dabhade, Maharashtra","Taliparamba, Kerala","Talode, Maharashtra","Talwara, Punjab","Tamluk, West Bengal","Tanda, Uttar Pradesh","Tanda, Uttar Pradesh","Tandur, Andhra Pradesh","Tanuku, Andhra Pradesh","Tarakeswar, West Bengal","Tarana, Madhya Pradesh","Taranagar, Rajasthan","Taraori, Haryana","Tarbha, Odisha","Tarikere, Karnataka","Tarn Taran, Punjab","Tasgaon, Maharashtra","Tehri, Uttarakhand","Tekkalakote, Karnataka","Tenali, Andhra Pradesh","Tenkasi, Tamil Nadu","Tenu Dam-cum-Kathhara, Jharkhand","Tezpur, Assam","Thakurdwara, Uttar Pradesh","Thammampatti, Tamil Nadu","Thana Bhawan, Uttar Pradesh","Thane, Maharashtra","Thanesar, Haryana","Thangadh, Gujarat","Thanjavur, Tamil Nadu","Tharad, Gujarat","Tharamangalam, Tamil Nadu","Tharangambadi, Tamil Nadu","Theni Allinagaram, Tamil Nadu","Thirumangalam, Tamil Nadu","Thirunindravur, Tamil Nadu","Thiruparappu, Tamil Nadu","Thirupuvanam, Tamil Nadu","Thiruthuraipoondi, Tamil Nadu","Thiruvalla, Kerala","Thiruvallur, Tamil Nadu","Trivandrum, Kerala","Thiruvarur, Tamil Nadu","Thodupuzha, Kerala","Thoothukudi, Tamil Nadu","Thoubal, Manipur","Thrissur, Kerala","Thuraiyur, Tamil Nadu","Tikamgarh, Madhya Pradesh","Tikota, Karnataka","Tilda Newra, Chhattisgarh","Tilhar, Uttar Pradesh","Talikota, Karnataka","Tindivanam, Tamil Nadu","Tinsukia, Assam","Tiptur, Karnataka","Tirora, Maharashtra","Tiruchendur, Tamil Nadu","Tiruchengode, Tamil Nadu","Tiruchirappalli, Tamil Nadu","Tirukalukundram, Tamil Nadu","Tirukkoyilur, Tamil Nadu","Tirunelveli, Tamil Nadu","Tirupathur, Tamil Nadu","Tirupathur, Tamil Nadu","Tirupati, Andhra Pradesh","Tiruppur, Tamil Nadu","Tirur, Kerala","Tiruttani, Tamil Nadu","Tiruvannamalai, Tamil Nadu","Tiruvethipuram, Tamil Nadu","Tiruvuru, Andhra Pradesh","Tirwaganj, Uttar Pradesh","Titlagarh, Odisha","Tittakudi, Tamil Nadu","Todabhim, Rajasthan","Todaraisingh, Rajasthan","Tohana, Haryana","Tonk, Rajasthan","Tuensang, Nagaland","Tuljapur, Maharashtra","Tulsipur, Uttar Pradesh","Tumkur, Karnataka","Tumsar, Maharashtra","Tundla, Uttar Pradesh","Tuni, Andhra Pradesh","Tura, Meghalaya","Uchgaon, Maharashtra","Udaipur, Rajasthan","Udaipur, Tripura","Udaipurwati, Rajasthan","Udgir, Maharashtra","Udhagamandalam, Tamil Nadu","Udhampur, Jammu and Kashmir","Udumalaipettai, Tamil Nadu","Udupi, Karnataka","Ugar, Karnataka","Ujhani, Madhya Pradesh","Ujjain, Madhya Pradesh","Umarga, Maharashtra","Umaria, Madhya Pradesh","Umarkhed, Maharashtra","Umarkote, Odisha","Umbergaon, Gujarat","Umred, Maharashtra","Umreth, Gujarat","Una, Gujarat","Unjha, Gujarat","Unnamalaikadai, Tamil Nadu","Unnao, Uttar Pradesh","Upleta, Gujarat","Uran, Maharashtra","Uran Islampur, Maharashtra","Uravakonda, Andhra Pradesh","Urmar Tanda, Punjab","Usilampatti, Tamil Nadu","Uthamapalayam, Tamil Nadu","Uthiramerur, Tamil Nadu","Utraula, Uttar Pradesh","Vadakara, Kerala","Vadakkuvalliyur, Tamil Nadu","Vadalur, Tamil Nadu","Vadgaon Kasba, Maharashtra","Vadipatti, Tamil Nadu","Vadnagar, Gujarat","Vadodara, Gujarat","Vaijapur, Maharashtra","Vaikom, Kerala","Valparai, Tamil Nadu","Valsad, Gujarat","Vandavasi, Tamil Nadu","Vaniyambadi, Tamil Nadu","Vapi, Gujarat","Vapi, Gujarat","Varanasi, Uttar Pradesh","Varkala, Kerala","Vasai, Maharashtra","Vedaranyam, Tamil Nadu","Vellakoil, Tamil Nadu","Vellore, Tamil Nadu","Venkatagiri, Andhra Pradesh","Veraval, Gujarat","Vicarabad, Andhra Pradesh","Vidisha, Madhya Pradesh","Vijainagar, Rajasthan","Vijapur, Gujarat","Vijaypur (Bageshwar), Uttarakhand","Vijayapura, Karnataka","Vijayawada, Andhra Pradesh","Vikramasingapuram, Tamil Nadu","Viluppuram, Tamil Nadu","Vinukonda, Andhra Pradesh","Viramgam, Gujarat","Virar, Maharashtra","Virudhachalam, Tamil Nadu","Virudhunagar, Tamil Nadu","Visakhapatnam, Andhra Pradesh","Visnagar, Gujarat","Viswanatham, Tamil Nadu","Vita, Maharashtra","Vizianagaram, Andhra Pradesh","Vrindavan, Uttar Pradesh","Vyara, Gujarat","Wadgaon Road, Maharashtra","Wadhwan, Gujarat","Wadi, Karnataka","Wai, Maharashtra","Wanaparthy, Andhra Pradesh","Wani, Maharashtra","Wankaner, Gujarat","Wara Seoni, Madhya Pradesh","Warangal, Andhra Pradesh","Wardha, Maharashtra","Warhapur, Uttar Pradesh","Warisaliganj, Bihar","Warora, Maharashtra","Warud, Maharashtra","Washim, Maharashtra","Wokha, Nagaland","Yadgir, Karnataka","Yamunanagar, Haryana","Yanam, Puducherry","Yavatmal, Maharashtra","Yawal, Maharashtra","Yellandu, Andhra Pradesh","Yemmiganur, Andhra Pradesh","Yerraguntla, Andhra Pradesh","Yevla, Maharashtra","Zaidpur, Uttar Pradesh","Zamania, Uttar Pradesh","Zira, Punjab","Zirakpur, Punjab","Zunheboto, Nagaland","Other, Other"];
var castes = ["Hindu Brahmin","Hindu Kayastha","Hindu Agarwal","Hindu Rajput","Hindu Khatri","Hindu Maratha","Hindu Arora","Hindu Yadav","Hindu Punjabi","Hindu Ramdasia","Hindu Ramgariah","Hindu Ravidasia","Hindu Bengali","Hindu Scheduled Caste","Hindu Nair","Hindu Kshatriya","Hindu Gupta","Hindu Jat","Hindu 96K Kokanastha","Hindu Ad Dharmi","Hindu Adi Andhra","Hindu Adi Dravida","Hindu Adi Karnataka","Hindu Agnikula Kshatriya","Hindu Agri","Hindu Ahom","Hindu Ambalavasi","Hindu Amil Sindhi","Hindu Anglo Indian","Hindu Araya","Hindu Arekatica","Hindu Arunthathiyar","Hindu Arya Vysya","Hindu Aryasamaj","Hindu Ayyaraka","Hindu Badaga","Hindu Bahi","Hindu Baibhand Sindhi","Hindu Baidya","Hindu Baishnab","Hindu Baishya","Hindu Balija","Hindu Banik","Hindu Baniya","Hindu Banjara","Hindu Barai","Hindu Bari","Hindu Barujibi","Hindu Besta","Hindu Bhandari","Hindu Bhanusali Sindhi","Hindu Bhatia","Hindu Bhatia Sindhi","Hindu Bhatraju","Hindu Bhavasar Kshatriya","Hindu Bhavsar","Hindu Bhovi","Hindu Bhumihar Brahmin","Hindu Billava","Hindu Bishnoi/Vishnoi","Hindu Boyer","Hindu Brahmbatt","Hindu Bunt","Hindu Chambhar","Hindu Chandraseniya Kayastha Prab","Hindu Chandravanshi Kahar","Hindu Chasa","Hindu Chattada Sri Vaishnava","Hindu Chaudary","Hindu Chaurasia","Hindu Chettiar","Hindu Chhapru Sindhi","Hindu Chhetri","Hindu Chippolu (Mera)","Hindu CKP","Hindu Coorgi","Hindu Dadu Sindhi","Hindu Darji","Hindu Dawoodi Bhora","Hindu Devadiga","Hindu Devandra Kula Vellalar","Hindu Devanga","Hindu Devar/Thevar/Mukkulathor","Hindu Dhaneshawat Vaish","Hindu Dhangar","Hindu Dheevara","Hindu Dhiman","Hindu Dhoba","Hindu Dhobi","Hindu Dumal","Hindu Dusadh (Paswan)","Hindu Ediga","Hindu Ezhava","Hindu Ezhuthachan","Hindu Gabit","Hindu Ganda","Hindu Gandla","Hindu Ganiga","Hindu Ganigashetty","Hindu Garhwali","Hindu Gavali","Hindu Gavara","Hindu Gawali","Hindu Ghisadi","Hindu Ghumar","Hindu Goala","Hindu Goan","Hindu Gomantak","Hindu Gondhali","Hindu Goswami","Hindu Goswami/Gosavi Brahmin","Hindu Goud","Hindu Gounder","Hindu Gowda","Hindu Gramani","Hindu Gudia","Hindu Gujarati","Hindu Gujjar","Hindu Guptan","Hindu Gurav","Hindu Gurjar","Hindu Hegde","Hindu Himachali","Hindu Others","Hindu Hugar (Jeer)","Hindu Hyderabadi Sindhi","Hindu Intercaste","Hindu Irani","Hindu Iyengar","Hindu Iyer","Hindu Jaalari","Hindu Jaiswal","Hindu Jandra","Hindu Jangam","Hindu Jatav","Hindu Jeer","Hindu Jogi (Nath)","Hindu Kachara","Hindu Kadava Patel","Hindu Kahar","Hindu Kaibarta","Hindu Kalal","Hindu Kalar","Hindu Kalinga","Hindu Kalinga Vysya","Hindu Kalita","Hindu Kalwar","Hindu Kamboj","Hindu Kamma","Hindu Kannada Mogaveera","Hindu Kansari","Hindu Kapu","Hindu Kapu Naidu","Hindu Karana","Hindu Karmakar","Hindu Karuneegar","Hindu Karuneekar","Hindu Kasar","Hindu Kashyap","Hindu Katiya","Hindu Keralite","Hindu Khandayat","Hindu Khandelwal","Hindu Kharwar","Hindu Khatik","Hindu Khukhrain","Hindu Koiri","Hindu Kokanastha Maratha","Hindu Koli","Hindu Koli Mahadev","Hindu Kongu Vellala Gounder","Hindu Konkani","Hindu Kori","Hindu Koshti","Hindu Kudumbi","Hindu Kulal","Hindu Kulalar","Hindu Kulita","Hindu Kumaoni","Hindu Kumawat","Hindu Kumbara","Hindu Kumbhakar","Hindu Kumbhar","Hindu Kumhar","Hindu Kummari","Hindu Kunbi","Hindu Kuravan","Hindu Kurmi","Hindu Kurmi Kshatriya","Hindu Kuruba","Hindu Kuruhina Shetty","Hindu Kurumbar","Hindu Kushwaha","Hindu Kushwaha (Koiri)","Hindu Kutchi","Hindu Lambadi","Hindu Lambani","Hindu Larai Sindhi","Hindu Larkana Sindhi","Hindu Leva","Hindu Lingayath","Hindu Lodhi Rajput","Hindu Lohana","Hindu Lohar","Hindu Lubana","Hindu Madiga","Hindu Mahajan","Hindu Mahar","Hindu Maharashtrian","Hindu Mahendra","Hindu Maheshwari","Hindu Mahishya","Hindu Mahisya","Hindu Majabi","Hindu Mala","Hindu Malayalee","Hindu Malayalee Namboodiri","Hindu Mali","Hindu Mallah","Hindu Mangalorean","Hindu Manipuri","Hindu Mannuru Kapu","Hindu Mapila","Hindu Maruthuvar","Hindu Marvar","Hindu Marwari","Hindu Matang","Hindu Mathur","Hindu Maurya","Hindu Meena","Hindu Meenavar","Hindu Mehra","Hindu Menon","Hindu Mera","Hindu Meru","Hindu Meru Darji","Hindu Mochi","Hindu Modak","Hindu Mogaveera","Hindu Monchi","Hindu Mudaliar","Hindu Mudaliar - Senguntha","Hindu Mudaliar Arcot","Hindu Mudaliar Saiva","Hindu Mudaliyar","Hindu Mudiraj","Hindu Mukkulathor","Hindu Mukulathur","Hindu Munnuru Kapu","Hindu Muthuraja","Hindu Naagavamsam","Hindu Nadar","Hindu Nagaralu","Hindu Nai","Hindu Naicker","Hindu Naidu","Hindu Naik","Hindu Nair","Hindu Namasudra","Hindu Nambiar","Hindu Namboodiri","Hindu Namosudra","Hindu Napit","Hindu Nath","Hindu Nayaka","Hindu Neeli","Hindu Nepali","Hindu Nhavi","Hindu OBC/Barber/Naayee","Hindu Oriya","Hindu Oswal","Hindu Otari","Hindu Padmasali","Hindu Pal","Hindu Panchal","Hindu Pandaram","Hindu Panicker","Hindu Parkava Kulam","Hindu Parsi","Hindu Partraj","Hindu Pasi","Hindu Paswan","Hindu Patel","Hindu Pathare Prabhu","Hindu Patil","Hindu Patil Leva","Hindu Patnaick","Hindu Patnaick/Sistakaranam","Hindu Patra","Hindu Perika","Hindu Pillai","Hindu Poosala","Hindu Porwal","Hindu Prajapati","Hindu Raigar","Hindu Rajaka","Hindu Rajastani","Hindu Rajbhar","Hindu Rajbonshi","Hindu Rajput Rohella/Tank","Hindu Rawat","Hindu Reddy","Hindu Relli","Hindu Rohiri Sindhi","Hindu Sadgope","Hindu Saha","Hindu Sahiti Sindhi","Hindu Sahu","Hindu Saini","Hindu Sakkhar Sindhi","Hindu Saliya","Hindu Saurashtra","Hindu Savji","Hindu Scheduled Tribe","Hindu Sehwani Sindhi","Hindu Senai Thalaivar","Hindu Senguntha Mudaliyar","Hindu Sepahia","Hindu Setti Balija","Hindu Settibalija","Hindu Shah","Hindu Shetty","Hindu Shikarpuri Sindhi","Hindu Shimpi","Hindu Sindhi","Hindu SKP","Hindu Somvanshi","Hindu Sonar","Hindu Soni","Hindu Sourashtra","Hindu Sozhiya Vellalar","Hindu Srisayana","Hindu Srisayani","Hindu Sugali (Naika)","Hindu Sunari","Hindu Sundhi","Hindu Sutar","Hindu Suthar","Hindu Swakula Sali","Hindu Swarnakar","Hindu Tamboli","Hindu Tamil","Hindu Tamil Yadava","Hindu Tanti","Hindu Tantubai","Hindu Tantuway","Hindu Telaga","Hindu Teli","Hindu Telugu","Hindu Thakkar","Hindu Thakore","Hindu Thakur","Hindu Thatai Sindhi","Hindu Thigala","Hindu Thiyya","Hindu Tili","Hindu Togata","Hindu Tonk Kshatriya","Hindu Turupu Kapu","Hindu Udayar","Hindu Uppara","Hindu Urali Gounder","Hindu Urs","Hindu Vada Balija","Hindu Vadagalai","Hindu Vaddera","Hindu Vaish","Hindu Vaishnav","Hindu Vaishya","Hindu Valluvan","Hindu Valmiki","Hindu Vania","Hindu Vaniya","Hindu Vanjara","Hindu Vanjari","Hindu Vankar","Hindu Vannar","Hindu Vannia Kula Kshatriyar","Hindu Vanniyar","Hindu Variar","Hindu Varshney","Hindu Veera Saivam","Hindu Veerashaiva","Hindu Velaan/Vellalar","Hindu Velama","Hindu Vellalar","Hindu Vellalar Devandra Kula","Hindu Veluthedathu Nair","Hindu Vettuva Gounder","Hindu Vilakkithala Nair","Hindu Vishwakarma","Hindu Viswabrahmin","Hindu Vokkaliga","Hindu Vysya","Hindu Yellapu","Sikh Ahluwalia","Sikh Arora","Sikh Bhatia","Sikh Bhatra","Sikh Clean Shaven","Sikh Ghumar","Sikh Gursikh","Sikh Intercaste","Sikh Jat","Sikh Kamboj","Sikh Kesadhari","Sikh Khatri","Sikh Kshatriya","Sikh Lubana","Sikh Majabi","Sikh Others","Sikh Rajput","Sikh Ramdasia","Sikh Ramgharia","Sikh Ravidasia","Sikh Saini","Sikh Tonk Kshatriya","Muslim Sia","Muslim Sunni","Muslim Others","Christian Anglo Indian","Christian Born Again","Christian Brethren","Christian Catholic","Christian Catholic - Knanaya","Christian Catholic - Latin","Christian Catholic - Malankara","Christian Catholic - Roman","Christian Catholic - Syrian","Christian Chaldean","Christian CMS","Christian CSI","Christian Evangelical","Christian Indian Orthodox","Christian Jacobite","Christian Jacobite - Knanaya","Christian Jacobite - Syrian","Christian Knanaya","Christian Mangalorean","Christian Manglorean","Christian Marthomite","Christian Nadar","Christian Pentecost","Christian Protestant","Christian Syrian","Christian Syrian - Malabar","Christian Syrian - Orthodox","Christian Syro - Malabar","Christian Others","Jain Digambar","Jain Jain-Others","Jain Shewetamber","Buddhist Buddhist","Spiritual Spiritual","Parsi Parsi","Jewish Jewish","Others Others"];
var casteIndices = {"Hindu":[0,394],"Sikh":[395,416],"Muslim":[417,419],"Christian":[420,448],"Jain":[449,451],"Buddhist":[452,452],"Spiritual":[453,453],"Parsi":[454,454],"Jewish":[455,455],"Others":[456,456]};
var atrDef={cat:{name:"Category",vals:[{c:"bride",n:"Bride"},{c:"groom",n:"Groom"}]},stat:{name:"Status",vals:[{c:"un",n:"Unmarried"},{c:"wid",n:"Widowed"},{c:"div",n:"Divorced"},{c:"wtDiv",n:"Awaiting Divorce"}]},edu:{name:"Education field",vals:[{c:"edE",n:"Engineering/ Technology"},{c:"edCI",n:"Computers/ IT"},{c:"edED",n:"Education"},{c:"edM",n:"Medical/ Healthcare"},{c:"edS",n:"Science"},{c:"edF",n:"Finance/ Banking"},{c:"edC",n:"Commerce"},{c:"edA",n:"Arts"},{c:"edL",n:"Law"},{c:"edH",n:"Hotel/ Hospitality"},{c:"edMJ",n:"Media/ Journalism"},{c:"edD",n:"Architecture/ Design"},{c:"edT",n:"Travel/ Tourism"},{c:"edO",n:"Others"}]},workStat:{name:"Work area",vals:[{c:"wNW",n:"Not working"},{c:"wIT",n:"IT/ Software Engineering"},{c:"wEN",n:"Engineering/ Non IT"},{c:"wTT",n:"Teaching/ Training"},{c:"wMD",n:"Medical/ Doctor/ Surgeon"},{c:"wNH",n:"Nursing/ Healthcare"},{c:"wFB",n:"Finance/ Banking/ Accounting"},{c:"wHH",n:"Hotel/ Hospitality"},{c:"wAH",n:"Admin/ HR"},{c:"wMJ",n:"Media/ Journalism/ Entertainment"},{c:"wAG",n:"Agriculture"},{c:"wAV",n:"Airline/ Aviation"},{c:"wAD",n:"Architecture/ Design"},{c:"wWD",n:"Art/ Web Design/ Animation"},{c:"wFJ",n:"Fashion/ Beauty/ Jewellery"},{c:"wBP",n:"BPO/ Customer Support/ KPO"},{c:"wCS",n:"Civil Services"},{c:"wD",n:"Defense"},{c:"wL",n:"Legal/ Law"},{c:"wM",n:"Music"},{c:"wMN",n:"Merchant Navy"},{c:"wSM",n:"Sales/ Marketing"},{c:"wS",n:"Science"},{c:"wCT",n:"Contracting/ Trading"},{c:"wSW",n:"Social Work/ NGO"},{c:"wSP",n:"Sports"},{c:"wTR",n:"Travel/ Tourism"},{c:"wW",n:"Writer/ Literature"},{c:"wOT",n:"Others"}]},inc:{name:"Annual Income",vals:[{c:0,n:"Not applicable"},{c:1,n:"Upto INR 2 Lakhs"},{c:2,n:"INR 2 Lakhs to 4 Lakhs"},{c:4,n:"INR 4 Lakhs to 7 Lakhs"},{c:7,n:"INR 7 Lakhs to 10 Lakhs"},{c:10,n:"INR 10 Lakhs to 15 Lakhs"},{c:15,n:"INR 15 Lakhs to 20 Lakhs"},{c:20,n:"INR 20 Lakhs to 30 Lakhs"},{c:30,n:"INR 30 Lakhs to 50 Lakhs"},{c:50,n:"INR 50 Lakhs to 75 Lakhs"},{c:75,n:"INR 75 Lakhs to 1 Crore"},{c:100,n:"INR 1 Crore & above"}]}};
var contactEmail = "contact@matrified.com";
var appMessages = {
		"pass_notfound":"Old password doesn't match.",
		"attach_limitexceed":"You can not upload more than 6 images",
		"attach_invalid":"Invalid image file.",
		"info.mail_alreadyexists":"Account with same email already exists.",
		"meta.mailCode_invalid":"Invalid Activation code. Please check your code and retry.",
		"error_generic":"Oops! There was some problem processing your request. Please try again or contact us at "+contactEmail,
		"attach_sizeexceed": "Uploaded file exceeds the allowed size of 5MB. Please upload a smaller file.",
		"adid_alreadyexists":"Your profile already exits. Please edit the existing one instead of creating a new one.",
		"desc_sizeexceed":"Description exceeds the maximum allowed character length.",
		"vmail.send_generic":"Your email was updated but activation email sending failed! Please check your email address or if the problem persists contact us at "+contactEmail,
		"match_notallowed":"Matching feature is currently available for users born in India.",
		"btime_notfound":"This feature requires birth details of both members to be set in their respective profiles.",
		"ad.stat_notallowed":"You profile was disapproved! Please go to My Profile section and resubmit with a valid and meaningful description.",
		"action_notallowed":"Please choose another profile to perform this action.",
		"ad.stat_req":"Your recent profile changes are yet to be verified. You will be notified by mail when this step completes.",
		"ad.stat_inactive":"We were not able to reach your email id. Go to My Profile section to take further action to fix this."
};
MatrimonialApp.factory('MatrimonyUtils', ['zodiacFilter', 'ageheightFilter', '$timeout', '$rootScope', '$window',
  function(zodiacFilter, ahFilter, $timeout, $rootScope, $window) {
    $rootScope.hostServer = hostServer;
    var ages = [];
    var heights = [];
    var cSettings = {
      autoHideDialCode: false,
      dialCodeDelimiter: "",
      defaultStyling: "outside",
      preferredCountries: ["in", "us", "gb", "ca", "nz"]
    };
    var minLen = 2;
    var tSort = function(items, ele, splitter) {
      if (items.length == 0) {
        return ["Other" + splitter + "Other"];
      }
      var beginswith = [],
        caseSensitive = [],
        caseInsensitive = [],
        item;

      while ((item = items.shift())) {
        if (!item.toLowerCase().indexOf(ele.query.toLowerCase())) beginswith.push(item);
        else if (~item.indexOf(ele.query)) caseSensitive.push(item);
        else caseInsensitive.push(item);
      }

      return beginswith.concat(caseSensitive, caseInsensitive);

    };
    var utilsFx = {
      getHeights: function() {
        if (heights.length > 0) return heights;
        var y = 134,
          dupChecker = {},
          nameO = '';
        while (y < 220) {
          nameO = ahFilter(y, "height");
          if (!dupChecker[nameO]) {
            heights.push({
              height: y,
              name: nameO
            });
            dupChecker[nameO] = nameO;
          }
          y = y + 2;
        }
        return heights;
      },
      getAges: function() {
        if (ages.length > 0) return ages;
        var i = 17;
        while (i++ < 80) {
          ages.push({
            age: i,
            name: i + ' years'
          });
        }
        return ages;
      },
      initCarousal: function() {
        $timeout(function() {
          $('.popInfo').popover({
            content: zodContent
          });
          $(".carousel").unbind();
          $(".carousel").carousel("pause").removeData();
          $('.carousel').on('slide.bs.carousel', function(ele) {
            var img = $(ele.relatedTarget).find("img");
            if (!img.attr("src")) img.attr("src", img.data("src"));
          });
          $('.carousel').each(function() {
            $(this).find('.carousel-inner .item').removeClass("active");
            var item = $(this).find('.carousel-inner .item:first-child');
            var itemImage = item.find('img');
            if (!itemImage.attr("src")) {
              itemImage.attr("src", itemImage.data("src"));
            }
            item.addClass("active");
            $(this).find('.carousel-indicators li').removeClass("active");
            $(this).find('.carousel-indicators li:first-child').addClass("active");
            $(this).carousel(0);

          });
        });

      },
      success: function(msg) {
        $rootScope.notify = {
          type: 'success',
          msg: [msg]
        };
        $('#myModal').modal('show');
      },
      error: function(msg) {
        $rootScope.notify = {
          type: 'error',
          msg: [msg]
        };
        $('#myModal').modal('show');
      },
      validation: function(obj) {
        var msgs = [];
        for (var i in obj) {
          var errorCode = obj[i].field + "_" + obj[i].key;
          msgs[i] = appMessages[errorCode] || errorCode;
        }
        $rootScope.notify = {
          type: 'error',
          msg: msgs
        };
        $('#myModal').modal('show');
      },
      initCommonActions: function($http, $scope) {
	    $('#contactModal').on('hidden.bs.modal', function (e) {
    	  utilsFx.success(
          "Congratulations! Your interest and contact email has been shared with this member.");
    	  $scope.$apply();
    	});
        $scope.gunmatch = function(ad) {
          ad.rType = 'gunReport';
          if (!ad.gun) {
            $http.get('/gun-match/' + ad.id).success(function(data) {
              ad.gun = data;
              $timeout(function() {
                $bar = $("#gun-bar" + ad.id);
                $bar.width(ad.gun.percentage + '%');
                $bar.text(ad.gun.percentage + '% Compatibility');
              });

            });
          } else {
            $timeout(function() {
              $bar = $("#gun-bar" + ad.id);
              $bar.width(ad.gun.percentage + '%');
              $bar.text(ad.gun.percentage + '% Compatibility');
            });
          }
        };
        $scope.picrequest = function(ad) {
          if (!ad.picrequest) {
            $http.get('/request-pic/' + ad.id).success(function(data) {
              ad.picrequest = true;
              utilsFx.success("Your picture request was successfully sent.");

            });
          } else {
            utilsFx.success("Picture request already sent!");
          }
        };
        $scope.zreport = function(ad) {
          ad.rType = 'zodReport';
          if (!ad.zreport) {
            ad.zreport = "zod/" + zodiacFilter($rootScope.loggedbdate) + "-" + zodiacFilter(ad.attr.bDate) +
              ".html";
          }
        };
        $scope.contact = function(ad) {
          if (!ad.interestSent) {
            $http.post('/stats', {
              id: ad.id
            }).success(function() {
              ad.interestSent = true;
              $('#contactModal').modal('show');
            });
          } else {
            utilsFx.success("Interest already sent!.");
          }
        }
      },
      searchSuccess: function(pg, $scope, data) {
        if (pg != 0 && data.length == 0) {
          $scope.currPg--;
          $scope.endPg = $scope.currPg;
        } else {
          if (pg == 0 && data.length < $scope.pgSize) {
            $scope.pager = false;
          } else {
            $scope.pager = true;
          }
          $scope.initSearch = true;
          $scope.ads = data;
          $window.scrollTo(0, 0);
          utilsFx.initCarousal();
        }
      },
      fileUploadDone: function(responseObj, $scope) {
    	  if (responseObj.errorCode) {
			   utilsFx.validation(responseObj.errorResponses);
               $scope.$apply();
            } else {
              for (var i in responseObj.success) {
                $scope.editAd.attach.push(responseObj.success[i]);
              }
              $timeout(function() {
            	  utilsFx.initCarousal();
              });
              utilsFx.success("Congratulations! Image successfully uploaded.");
            }
      },
      profileInit: function($scope, attr) {

        if (attr.hasBTime) {
          $scope.prebLoc = attr.bLoc.ct + ", " + attr.bLoc.st;
          var dt = new Date(attr.bDate);
          attr.bHour = dt.getUTCHours();
          attr.bMin = dt.getUTCMinutes();
        }

        var fields = [{
          field: '#curCountry',
          attr: 'loc',
          pre: 'preLoc',
          req: 'currLocReq',
          plugin: '#currLoc'
        }, {
          field: '#bCountry',
          attr: 'bLoc',
          pre: 'prebLoc',
          req: 'bLocReq',
          plugin: '#birthLoc'
        }];
        for (var fIndex in fields) {

          var obj = fields[fIndex];

          //init country selectors
          $(obj.field).intlTelInput(cSettings);
          //set default values in angular variables
          $scope[obj.req] = true;

          if (attr[obj.attr].ccode) {
            $(obj.field).intlTelInput("selectCountry", attr[obj.attr].ccode);
            if (attr[obj.attr].ccode != 'in') {
              $scope[obj.req] = false;
            } else {
              $scope[obj.pre] = attr[obj.attr].ct + ", " + attr[obj.attr].st;
            }
          } else {
            attr[obj.attr].cntry = $(obj.field).intlTelInput("getSelectedCountryData").name;
            attr[obj.attr].ccode = $(obj.field).intlTelInput("getSelectedCountryData").iso2;

          }
          $(obj.field).val(attr[obj.attr].cntry);

          $(obj.field).change(function(obj) {
            return function() {
              attr[obj.attr].cntry = $(obj.field).intlTelInput("getSelectedCountryData").name;
              attr[obj.attr].ccode = $(obj.field).intlTelInput("getSelectedCountryData").iso2;
              $(obj.field).val(attr[obj.attr].cntry);
              attr[obj.attr].ct = "";
              attr[obj.attr].st = "";
              $scope[obj.pre] = "";
              if (attr[obj.attr].ccode != 'in') {
                $scope[obj.req] = false;
              } else {
                $scope[obj.req] = true;
              }
              $scope.$apply();

            };
          }(obj));

          $(obj.plugin).typeahead({
            source: cities,
            items: 'all',
            minLength: minLen,
            sorter: function(obj) {
              return function(items) {
                attr[obj.attr].ct = "";
                attr[obj.attr].st = "";
                return tSort(items, this, ", ");
              };
            }(obj),
            updater: function(obj) {
              return function(item) {
                var ind = item.lastIndexOf(",");
                attr[obj.attr].ct = item.slice(0, ind);
                attr[obj.attr].st = $.trim(item.slice(ind + 1));
                return item;
              };
            }(obj)
          });

        }

        $("#religion").typeahead({
          source: castes,
          items: 'all',
          minLength: 3,
          sorter: function(items) {

            $timeout(function() {
              attr.faith = "";
              attr.group = "";
            });
            return tSort(items, this, " ");
          },
          updater: function(item) {
            var ind = item.indexOf(" ");
            attr.faith = item.slice(0, ind);
            attr.group = $.trim(item.slice(ind + 1));
            return item;
          }
        });
        if (attr.faith) {
          $scope.preRel = attr.faith + " " + attr.group;
        }
        $timeout(function() {
          $('.app-tips').tooltip();
        });

      },
      validateProfile: function($scope, attr) {
        if ($.trim(attr.loc.ct) == '' || $('#currLoc').val().length <= minLen) {
          $scope.preLoc = "";
          attr.loc.ct = "";
          attr.loc.st = "";
        }
        if (attr.hasBTime && ($.trim(attr.bLoc.ct) == '' || $('#birthLoc').val().length <= minLen)) {
          $scope.prebLoc = "";
          attr.bLoc.ct = "";
          attr.bLoc.st = "";
        }
        if ($.trim(attr.faith) == '' || $('#religion').val().length <= 2) {
          $scope.preRel = "";
          attr.faith = "";
          attr.group = "";
        }

      },
      logout:function(){
    	  if(typeof(Storage) !== "undefined") {
 			 localStorage.removeItem("loggedIn");
 		}
    	window.location = "index.html";
      }
      
    };
    return utilsFx;
  }
]).run(['$rootScope', '$http','$timeout','$location', function($rootScope, $http,$timeout,$location) {
  $rootScope.adLength = 500;
  $rootScope.loggedUser = {name:'User'};
  $rootScope.totalNotifies = 0;
  var NOTIFICATION_TYPES = {'pendingInterests':{path:'/stats',id:1011},
  'accepted':{path:'/stats/all-accepted',id:1012},
  'pendingHoroViews':{path:'/gun/match',id:1013},
  'pendingPicViews':{path:'/pic-requests',id:1014}
  };
 var notificationCallBack = function(data){
	  
		if(data.pendingInterests>0){
		  window.plugin.notification.local.add({ 
		  id: NOTIFICATION_TYPES.pendingInterests.id,
		  title: 'Congratulations',
		  badge: data.total,
		  sound: null,
		  json:NOTIFICATION_TYPES.pendingInterests.path,
		  message: data.pendingInterests+' new Interest(s) received' });
		}
		if(data.accepted>0){
		  window.plugin.notification.local.add({ 
		  id: NOTIFICATION_TYPES.accepted.id,
		  title: 'Congratulations',
		  badge: data.total,
		  sound: null,
		  json:NOTIFICATION_TYPES.accepted.path,
		  message: data.accepted+' member(s) Accepted your interest' });
		}
		if(data.pendingHoroViews>0){
		  window.plugin.notification.local.add({ 
		  id: NOTIFICATION_TYPES.pendingHoroViews.id,
		  title: 'Horoscope Interest',
		  badge: data.total,
		  sound: null,
		  json:NOTIFICATION_TYPES.pendingHoroViews.path,
		  message: data.pendingHoroViews+' member(s) matched horoscope with you' });
		}
		if(data.pendingPicViews>0){
		   window.plugin.notification.local.add({ 
		  id: NOTIFICATION_TYPES.pendingPicViews.id,
		  title: 'Picture Request',
		  badge: data.total,
		  sound: null,
		  json:NOTIFICATION_TYPES.pendingPicViews.path,
		  message: data.pendingPicViews+' member(s) requested you to upload picture' });
		}
	  
	  
	  };
  
  var getNotification = function(callback){
	    $http.get('/notification/v/'+matrifiedVersion+"/").success(function(data) {
			    $rootScope.loggedUser = data.contact;
			    $rootScope.loggedbdate = data.bdate;
			   // $rootScope.loggedcat = data.cat;
			   // $rootScope.loggedstat = data.stat;
			    $rootScope.loggedprivacy = data.privacy;
			    $rootScope.$broadcast('UINFO', data);
			    $rootScope.penInterests = data.pendingInterests;
			    $rootScope.acceptedInterest = data.accepted;
			    $rootScope.pendingHoroViews = data.pendingHoroViews;
				$rootScope.pendingPicViews = data.pendingPicViews;
			    $rootScope.totalNotifies = data.total;
			    
			    if(callback){
		    	 //upgrade check - only required for phonegap and callback is in phonegap
			    if(data.upgrade){
			    	window.location="upgrade.html";
			    }	
				 callback(data);
				 $timeout(function(){getNotification(notificationCallBack);}, 120000);
				}else{
				 $timeout(getNotification, 120000);
				}
			    
			  }).error(function() {
				 // in case of an error : dont wait and immediately resend call 
				  if(callback){
					  $timeout(function(){getNotification(notificationCallBack);}, 5000);
				  }else{
					  $timeout(getNotification, 5000);
				  }
		      });
	  };
	  
	   if(isPhoneGap){
	    	document.addEventListener("deviceready", function() {
			 //in local dev env these plugins are not available and will throw error
			  if(window.plugin){
			     window.plugin.backgroundMode.enable();
			     window.plugin.notification.local.onclick = function (id, state, json) {
			     $rootScope.$apply(function() {
					$location.path(json);
				 });
			      
			  };
			  getNotification(notificationCallBack);
			  }else{
			     getNotification();
			  }
			 
			  
			},false);
		}else{
		  getNotification();
		}
	  
  
  
  
  
}]).filter('keyval', function() {
  return function(input, atr) {
    var out = input;
    for (var k in atrDef[atr].vals) {
      if (atrDef[atr].vals[k].c == input)
        return atrDef[atr].vals[k].n;
    }
    return out;
  };
}).filter('ageheight', function() {
  return function(input, atr) {
    if (atr == "age") {
      var d2 = new Date();
      var diff = d2.getTime() - input;
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)) + " years";
    }
    if (atr = "height") {
      var inches = (input * 0.393700787).toFixed(0);
      var feet = Math.floor(inches / 12);
      inches %= 12;
      return feet + "' " + inches + "''  ";
    }
    return input;
  };
}).filter('zodiac', function() {
  var zods = {
    0: {
      limit: 21,
      vals: ["Aquarius", "Capricorn"]
    },
    1: {
      limit: 20,
      vals: ["Pisces", "Aquarius"]
    },
    2: {
      limit: 21,
      vals: ["Aries", "Pisces"]
    },
    3: {
      limit: 21,
      vals: ["Taurus", "Aries"]
    },
    4: {
      limit: 21,
      vals: ["Gemini", "Taurus"]
    },
    5: {
      limit: 21,
      vals: ["Cancer", "Gemini"]
    },
    6: {
      limit: 22,
      vals: ["Leo", "Cancer"]
    },
    7: {
      limit: 22,
      vals: ["Virgo", "Leo"]
    },
    8: {
      limit: 22,
      vals: ["Libra", "Virgo"]
    },
    9: {
      limit: 22,
      vals: ["Scorpio", "Libra"]
    },
    10: {
      limit: 23,
      vals: ["Sagittarius", "Scorpio"]
    },
    11: {
      limit: 22,
      vals: ["Capricorn", "Sagittarius"]
    }
  };
  return function(input) {
    var dt = new Date(input);
    var zodObj = zods[dt.getMonth()];
    return dt.getDate() >= zodObj.limit ? zodObj.vals[0] : zodObj.vals[1];
  };
}).config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $httpProvider.defaults.withCredentials = true;
  $routeProvider.when('/search', {
    templateUrl: 'search.html',
    controller: 'SearchController'
  }).when('/search/:key', {
    templateUrl: 'search.html',
    controller: 'SearchController'
  }).when('/postad', {
    templateUrl: 'postad.html',
    controller: 'PostController'
  }).when('/stats', {
    templateUrl: 'adstat.html',
    controller: 'AdStatController'
  }).when('/stats/sent', {
    templateUrl: 'sentadstat.html',
    controller: 'SentStatController'
  }).when('/stats/all-accepted', {
    templateUrl: 'acceptedstat.html',
    controller: 'AcceptedStatController'
  }).when('/gun/match', {
    templateUrl: 'gunstat.html',
    controller: 'GunStatController'
  }).when('/pic-requests', {
    templateUrl: 'gunstat.html',
    controller: 'GunStatController'
  }).when('/profile', {
    templateUrl: 'myads.html',
    controller: 'MyAdsController'
  }).when('/account', {
    templateUrl: 'account.html',
    controller: 'AccountController'
  }).when('/verify', {
    templateUrl: 'verify.html',
    controller: 'VerifyController'
  }).when('/verify-classic', {
    templateUrl: 'verify-classic.html',
    controller: 'VerifyController'
  }).otherwise({
    redirectTo: '/search'
  });

  var appInterceptors = ['$q', '$location', '$rootScope', 'MatrimonyUtils', function($q, $location, $rootScope,
    MatrimonyUtils) {
    return {
      'request': function(config) {

        $rootScope.requestProgress = true;
        if (config.url.indexOf('.html') == -1 && config.url.indexOf(hostServer)== -1) {
          config.url = hostServer + config.url;
        }
        return config || $q.when(config);
      },

      'requestError': function(rejection) {
        $rootScope.requestProgress = false;
        return $q.reject(rejection);
      },
      'response': function(response) {
        if ($('.navbar-toggle').is(":visible") && $('.navbar-collapse').hasClass("in"))
          $('.navbar-collapse').collapse('hide');
        $rootScope.requestProgress = false;
        var eCode = response.data.errorCode;
        if (eCode) {
          switch (eCode) {
            case 4400:
            default:
              MatrimonyUtils.validation(response.data.errorResponses);
              break;
            case 4401:
               /* Implement retry mechanism if required in future
                 http://www.webdeveasy.com/javascript-promises-and-angularjs-q-service/
                 http://www.webdeveasy.com/interceptors-in-angularjs-and-useful-examples/
            	*/
              MatrimonyUtils.error('Please log in to continue. Redirecting to login screen.');
              MatrimonyUtils.logout();
              break;
            case 4412:
            case 4413:
              $location.path("/postad");
              break;
            case 4414:
              $location.path("/verify");
              break;
            case 4415:
              $location.path("/verify-classic");
              break;
          }
          return $q.reject(response);
        }
        return response || $q.when(response);
      },
      'responseError': function(rejection) {
        $rootScope.requestProgress = false;
        if (rejection.status === 0) {
          if(rejection.config.url.indexOf("/notification")==-1){
        	  $('#reloadModal').modal('show');
          }
          
        } else {
          MatrimonyUtils.error(
            'Problem occured while processing request. Please try again or contact us at ' + contactEmail
          );
        }
        return $q.reject(rejection);
      }
    };
  }];

  $httpProvider.interceptors.push(appInterceptors);
}]).controller('SearchController', ['$routeParams', '$scope', '$http', '$timeout', 'MatrimonyUtils', function(
  $routeParams, $scope, $http, $timeout, MatrimonyUtils) {
  var key = $routeParams.key;
  if (key == 'activated') {
    $scope.activated = true;
  }
  if (!$('.navbar-toggle').is(":visible"))
    $('.panel-collapse').addClass("in");
  $scope.search = true;
  $scope.countries = $.fn.intlTelInput.getCountryData();
  $scope.gunAllowed = true;
  $scope.atrDef = atrDef;
  $scope.pgSize = 10;
  $scope.pager = true;

  $timeout(function() {
    $('.multiSelect').selectpicker();
    $scope.initComplete = true;
  });

  $scope.communities = [];
  $scope.subcaste = function() {
    $scope.communities.length = 0;
    $scope.attr.group.length = 0;
    var currCaste = $scope.attr.faith;
    if (currCaste) {
      var casteInd = casteIndices[currCaste];
      for (var j = casteInd[0]; j <= casteInd[1]; j++) {
        $scope.communities.push(castes[j].substr(castes[j].indexOf(' ') + 1));
      }
    }

  };
  $scope.ages = MatrimonyUtils.getAges();
  $scope.heights = MatrimonyUtils.getHeights();

  $scope.attr = {};
  $scope.attr.group = [];
  $scope.initSearch = false;
  $scope.currPg = 0;
  $scope.dSearch = function(pg) {
    $http.get('/ad/default-search/pg/' + pg).success(function(data) {
      MatrimonyUtils.searchSuccess(pg, $scope, data);
    });
  };
  $scope.dSearch(0);
  $scope.pageSearch = function(num) {
    $scope.currPg = num;
    if ($scope.sType == "custom") {
      $scope.search($scope.attr, num);
    } else {
      $scope.dSearch(num);
    }

  };
  $scope.clear = function(type, atr1, atr2) {

    $scope.attr[atr1] = type == 'arr' ? [] : "";
    if (atr2) $scope.attr[atr2] = type == 'arr' ? [] : "";
    $timeout(function() {
      $('.multiSelect').selectpicker('render');
    });
  };
  $scope.prosearch = function(adUrl, pg) {
    if ($scope.urlForm.$invalid) {
      $scope.urlFormError = true;
      return;
    } else {
      $scope.urlFormError = false;
    }
    $scope.sType = "custom";
    $scope.currPg = pg;
    $scope.endPg = undefined;
    $http.get('/ad/url/' + adUrl).success(function(data) {
      if (pg != 0 && data.length == 0) {
        $scope.currPg--;
        $scope.endPg = $scope.currPg;
      } else {
        if (pg == 0 && data.length < $scope.pgSize) {
          $scope.pager = false;
        } else {
          $scope.pager = true;
        }
        $scope.initSearch = true;
        $scope.ads = data;
        MatrimonyUtils.initCarousal();
      }
    });

  };
  $scope.search = function(attr, pg) {
    $scope.sType = "custom";
    $scope.currPg = pg;
    $scope.endPg = undefined;
    attr.pg = pg;
    var tmp = null,
      i = null;
    var rangeCorrectors = ['Age', 'Height', 'Inc'];
    for (i in rangeCorrectors) {
      var minV = $scope.attr['min' + rangeCorrectors[i]],
        maxV = $scope.attr['max' + rangeCorrectors[i]];
      if (minV && maxV && parseInt(minV) > parseInt(maxV)) {
        tmp = minV;
        $scope.attr['min' + rangeCorrectors[i]] = maxV;
        $scope.attr['max' + rangeCorrectors[i]] = tmp;
      }
    }
    $http.post('/ad/search', attr).success(function(data) {
      if ($('.navbar-toggle').is(":visible"))
        $('#collapseOne').collapse("hide");
      MatrimonyUtils.searchSuccess(pg, $scope, data);
    });

  };

  $scope.sType = "default";

  MatrimonyUtils.initCommonActions($http, $scope);
}]).controller('PostController', ['$scope', '$http', '$timeout', 'MatrimonyUtils', '$rootScope', '$location',
  function($scope, $http, $timeout, MatrimonyUtils, $rootScope, $location) {
    $scope.showUnreviewd = true;
    $scope.loadingFiles = false;

    $scope.atrDef = atrDef;
    $scope.success = false;

    $scope.ages = MatrimonyUtils.getAges();
    $scope.heights = MatrimonyUtils.getHeights();
    $scope.ad = {}, $scope.ad.attr = {}, $scope.ad.attr.loc = {};
    $scope.ad.attr.bLoc = {};
    $scope.ad.attach = [];
   // $scope.ad.attr.bDate = $rootScope.loggedbdate;
   // $scope.ad.attr.stat = $rootScope.loggedstat;
  //  $scope.ad.attr.cat = $rootScope.loggedcat;
    MatrimonyUtils.profileInit($scope, $scope.ad.attr);
  

    $scope.post = function(ad) {

      MatrimonyUtils.validateProfile($scope, ad.attr);
      $timeout(function() {
        if ($scope.adForm.$invalid) {
          MatrimonyUtils.error('Please fill in all the required fields marked in red to create your profile.');
          return;
        }

        $http.post('/ad', ad).success(function(data) {
          if (data.id) {
            $scope.success = true;
          }
          //check here if user is activated or not then only show this page
          $http.get('/user/isactivated').success(function(data) {
            $location.path("/profile");
          });
        });
      });

    };
  }
]).controller('MyAdsController', ['$rootScope', '$window', '$scope', '$http', '$timeout', '$location',
  'MatrimonyUtils',
  function($rootScope, $window, $scope, $http, $timeout, $location, MatrimonyUtils) {
    if (!$('.navbar-toggle').is(":visible"))
      $('.panel-collapse').addClass("in");
    $scope.showUnreviewd = true;
    $scope.allowRemove = true;
    $scope.uploadWait = true;
	/**
	 * check support for dataurl
	 * http://www.mikechambers.com/blog/2011/02/01/detecting-canvas-todataurl-support-in-browsers/
	 */
    if(isPhoneGap){
    	document.addEventListener("deviceready", function() {
		
				
    		 $('#myFile').bind('click', function(event) {
    		  	    event.preventDefault();
    		          navigator.camera.getPicture(
    		              function(imageURI) {
    		            	 window.resolveLocalFileSystemURI(imageURI, function(fileEntry){
    		            		
 		                         fileEntry.file(function(file){
 		                        	 /**
 		                          	var reader = new FileReader();
 	 		               			reader.onload = function(e) {
 	 		               			resizeUpload(e.target.result,$http,MatrimonyUtils,$scope);
 	 		               			};
 	 		               		    reader.readAsDataURL(file);
									**/
	                               //alert(JSON.stringify(file)); //view full metadata
	                                 
	                              var options = new FileUploadOptions();
	  							  options.fileKey = "File";
	  							  options.fileName = imageURI;
	  							  options.mimeType = file.type;
	  							 
	  							  var ft = new FileTransfer();
								  $scope.uploadWait = true;
  		                          $scope.$apply();
	  							
  		                          ft.upload(imageURI, encodeURI(hostServer + "/attach/upload"), function(r){
								      $scope.uploadWait = false;	
	  								  MatrimonyUtils.fileUploadDone(eval('('+r.response+')'),$scope);
								  },
								  function(error){
									  $scope.uploadWait = false;
									  $scope.$apply();
									  
									  alert("Switching to alternative upload coz of slow internet. You will now be taken to Email App selection menu. Simply choose your configured email and just click send to upload your image");
									  window.plugin.email.open({
											app: 'gmail',
											subject: 'Profile picture - '+$rootScope.loggedUser.mail+' - '+$rootScope.loggedUser.cell,
											to: [contactEmail],
											body: 'Profile picture for matrified.com',
											attachments:[imageURI]
											
										});
																	  
									  //alert(JSON.stringify(error));
									  //if(error["http_status"] == null){
									  // alert("Network lost. Check your network and try again.");
                                      //}else{
									   //alert("Unexpected error while uploading. Error Code: " + error.code + ". Please report it to "+contactEmail );
									  //}
									  
									  }, options);
                                   
  		                         
	                                 }, function(){
                                   								 
	  							     MatrimonyUtils.error("Error reading picture. Try uploading your image from website www.matrified.com"); 
	  							   });

  		                    },function(){
                              								
  		  				    MatrimonyUtils.error("Error reading picture. Try uploading your image directly from website www.matrified.com"); 
  		  				  } ); 
  		  			  },
    		              function(message) {
						    
    		                //Not required probably as silently do nothing if read is cancelled
    		               // MatrimonyUtils.error(message);
    		              }, {
    		                quality: 90,
    		                destinationType: Camera.DestinationType.FILE_URI,
    		                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    		                //allowEdit: true,
    		                encodingType: Camera.EncodingType.JPEG,
    		  			    correctOrientation:true,
    		                targetWidth: 440,
    		                targetHeight:540,
    		                saveToPhotoAlbum: false
    		              }

    		            );

    		        });
    		 $scope.uploadWait = false;
    		 $scope.$apply();
    		
    	},false);
    }else{
    	 $('#myFile').bind('change', function(evt) {
    		
    		 var file = evt.dataTransfer !== undefined ? evt.dataTransfer.files[0] : evt.target.files[0];
    		 //TODO: Check file size : cross browser! 
    		 $scope.uploadWait = true;
    		 $scope.$apply();
    		 
    		//if full File API and canvas support available: proceed to downscaling and upload
    		 //https://code.google.com/p/android/issues/detail?id=39882
    		 var nua = navigator.userAgent
    		 var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
    		 var testElem = document.createElement('canvas');
    		 var isCanvasSupported =  !!(testElem.getContext && testElem.getContext('2d'));
    		 if ( window.FileReader && window.File && window.FormData && 
    				 window.FileList && window.Blob && isCanvasSupported && !isAndroid){
        			var reader = new FileReader();
        			reader.onload = function(e) {
        				resizeUpload(e.target.result,$http,MatrimonyUtils,$scope);
        			};
        			reader.readAsDataURL(file);
    		 }else{
    			 $('#upload-form-ad').attr('action', hostServer + "/attach/upload");
    	         $('#upload-form-ad').submit(); //alert(this.files[0].size);
    		 }
           });
          
    	 $("#uploadTrg").load(function() {
        	 $scope.uploadWait = false;
        	 $scope.$apply();
             var response = '';
             try {
               response = $.trim(this.contentWindow.document.body.innerHTML);
             } catch (e) {
               //known issue when accessing a cross origin content. As of now, simply do a reload
               $window.location.reload();
             }
             if (response != '') {

               if (response.indexOf('pre') != -1) {
                 response = $(response).html();
               }
               var responseObj = eval('(' + response + ')');
               MatrimonyUtils.fileUploadDone(responseObj,$scope);
             }
           });
         
        $scope.uploadWait = false;
        
    }
    

    $scope.loadingFiles = false;
    $scope.ads = {};
    $scope.atrDef = atrDef;
    $scope.editAd = {};
    $scope.ages = MatrimonyUtils.getAges();
    $scope.heights = MatrimonyUtils.getHeights();

    $scope.changeSendMail = function(user) {
        if ($scope.emailForm.$invalid) {
          $scope.showMailError = true;
          return;
        }
        $scope.showMailError = false;
        $http.post('/user/change-send-mail', user).success(function() {
          $rootScope.loggedUser.mail = user.info.mail;
          $scope.editAd.stat = 'p';
          MatrimonyUtils.success('Email updated and Activation mail sent. Please check your mailbox.');
        });

      };
    $scope.remove = function(attachId, ad, carouselId) {

      $http.post('/attach/remove/' + attachId).success(function() {
        $.each(ad.attach, function(i, item) {
          if (item.aid == attachId) {
            ad.attach.splice(i, 1);
            MatrimonyUtils.initCarousal();
            $scope.edit(ad);
            return false;
          }
        });

      }).error(function(data, status, headers, config) {
        $scope.success = false;
      });

    };
    $scope.update = function(ad) {
      MatrimonyUtils.validateProfile($scope, ad.attr);
      $timeout(function() {
        if ($scope.adForm.$invalid) {
          MatrimonyUtils.error('Please fill in all the required fields marked in red to create your profile.');
          return;
        }
        $http.post('/ad/' + ad.id, ad).success(function() {
          MatrimonyUtils.success('Congratulations! You have successfully updated your profile.');

        });
      });

    };
    $scope.edit = function(ad) {
      $scope.editMode = true;
      $scope.success = false;
      $scope.editAd = ad;
    };
      $http.get('/ad').success(function(data) {
        $scope.ads = data;
        if (data.length == 0) {
          $location.path("/postad");
          return;
        } else {
          MatrimonyUtils.initCarousal();
          $timeout(function() {
            $scope.edit($scope.ads[0]);
            if (!$scope.editAd.attr.bLoc) $scope.editAd.attr.bLoc = {};
            MatrimonyUtils.profileInit($scope, $scope.editAd.attr);

          });
        }
      });
  }
]).controller('AdStatController', ['$scope', '$http', '$timeout', 'MatrimonyUtils', function($scope, $http, $timeout,
  MatrimonyUtils) {
  $scope.noRecords = false;
  $scope.gunAllowed = true;
  $scope.statsPage = true;
  $scope.currPg = 0;
  $scope.pager = true;
  $scope.atrDef = atrDef;
  $scope.pgSize = 10;

  MatrimonyUtils.initCommonActions($http, $scope);
  $scope.pageSearch = function(panel, num) {
    $scope.currPg = num;
    $scope.adViews(panel, num);

  };
  $http.get('/stats').success(function(data, status, headers, config) {
    $scope.stats = data;
    $timeout(function() {
      $('.panel-collapse').on('show.bs.collapse', function() {
        var panelIndex = $(this).data("index");
        $scope.adViews(panelIndex, 0);
      });
      if ($scope.stats.length > 0) {
        $('#panel0').collapse('show');
      } else {
        $scope.noRecords = true;
      }
    });

  });
  $scope.adViews = function(panelIndex, num) {
    var stat = $scope.stats[panelIndex];
    $http.get('/stats/ad/' + stat.id + '/pg/' + num).success(function(data) {
      if (num != 0 && data.length == 0) {
        $scope.currPg--;
        $scope.endPg = $scope.currPg;
      } else {
        if (num == 0 && data.length < $scope.pgSize) {
          $scope.pager = false;
        } else {
          $scope.pager = true;
        }
        stat.details = data;
      }

    });
  };
  $scope.vwbyDetails = function(detail) {
    $scope.selectedDetail = detail;
    if ($scope.selectedDetail.vwAds) {
      MatrimonyUtils.initCarousal();
      return;
    }
    var searchData = {
      crBy: detail.vwBy
    };
    $http.post('/ad/search', searchData).success(function(data) {
      if (data.length == 0) {
        MatrimonyUtils.error("This profile has not passed verification yet. Please visit later.");
        return;
      }
      $scope.selectedDetail.vwAds = data;
      MatrimonyUtils.initCarousal();

    });
  };
  $scope.accept = function(ad) {
    var acceptData = {
      id: $scope.selectedDetail.id
    };
    $http.post('/stats/accept', acceptData).success(function(data) {
      ad.contact = data;
      $scope.selectedDetail.status = "a";
    });
  };
  $scope.accepted = function(ad) {
    var id = $scope.selectedDetail.id;
    $http.get('/stats/' + id + '/accepted-contact').success(function(data) {
      ad.contact = data;
    });
  };
  $scope.decline = function(ad) {
    var declineData = {
      id: $scope.selectedDetail.id
    };
    $http.post('/stats/decline', declineData).success(function(data) {
      ad.contact = data;
      $scope.selectedDetail.status = "d";
    });
  };
}]).controller('SentStatController', ['$scope', '$http', '$timeout', 'MatrimonyUtils', function($scope, $http,
  $timeout, MatrimonyUtils) {
  $scope.stats = [];
  $scope.gunAllowed = true;
  $scope.sentstatsPage = true;
  $scope.noRecords = false;
  $scope.currPg = 0;
  $scope.atrDef = atrDef;
  $scope.pager = true;
  $scope.pgSize = 10;

  MatrimonyUtils.initCommonActions($http, $scope);
  $scope.pageSearch = function(num) {
    $scope.currPg = num;
    $scope.sentViews(num);

  };

  $scope.sentViews = function(num) {
    $http.get('/stats/sent/pg/' + num).success(function(data) {
      if (num != 0 && data.length == 0) {
        $scope.currPg--;
        $scope.endPg = $scope.currPg;
      } else {
        if (num == 0 && data.length < $scope.pgSize) {
          $scope.pager = false;
          if (data.length == 0) $scope.noRecords = true;
        } else {
          $scope.pager = true;
        }
        $scope.stats = data;
      }
    });
  };
  $scope.sentViews(0);
  $scope.vwbyDetails = function(stat) {
    $scope.selectedDetail = stat;
    if ($scope.selectedDetail.vwAds) {
      MatrimonyUtils.initCarousal();
      return;
    }
    var searchData = {
      id: stat.ad.id
    };
    $http.post('/ad/search', searchData).success(function(data) {
      if (data.length == 0) {
        MatrimonyUtils.error(
          "The user's profile is temporarily unavailable because of security reasons.");
        return;
      }
      $scope.selectedDetail.vwAds = data;
      MatrimonyUtils.initCarousal();
      if (stat.status && !stat.read) {
        $http.post('/stats/mark-read', {
          id: stat.id
        }).success(function(data) {
          stat.read = true;
        });
      }
    });
  };
  $scope.acceptedby = function(ad) {
    var statId = $scope.selectedDetail.id;
    $http.get('/stats/' + statId + '/acceptedby-contact').success(function(data) {
      ad.contact = data;
    });
  };
}]).controller('AcceptedStatController', ['$scope', '$http', '$timeout', 'MatrimonyUtils', function($scope, $http,
  $timeout, MatrimonyUtils) {
  $scope.stats = [];
  $scope.gunAllowed = false;
  $scope.sentstatsPage = true;
  $scope.noRecords = false;
  $scope.currPg = 0;
  $scope.atrDef = atrDef;
  $scope.pager = true;
  $scope.pgSize = 10;
  $scope.picrequest = function(ad) {
    MatrimonyUtils.picrequest(ad, $http);
  };
  $scope.pageSearch = function(num) {
    $scope.currPg = num;
    $scope.sentViews(num);

  };

  $scope.sentViews = function(num) {
    $http.get('/stats/all-accepted/pg/' + num).success(function(data) {
      if (num != 0 && data.stats.length == 0) {
        $scope.currPg--;
        $scope.endPg = $scope.currPg;
      } else {
        if (num == 0 && data.stats.length < $scope.pgSize) {
          $scope.pager = false;
          if (data.stats.length == 0) $scope.noRecords = true;
        } else {
          $scope.pager = true;
        }
        $scope.forUId = data.id;
        $scope.stats = data.stats;
      }
    });
  };
  $scope.sentViews(0);
  $scope.vwbyDetails = function(stat) {
    $scope.selectedDetail = stat;
    if ($scope.selectedDetail.vwAds) {
      MatrimonyUtils.initCarousal();
      return;
    }
    var searchData = {
      id: stat.ad.id
    };
    var statForUser = false;
    if ($scope.forUId == stat.ad.attr.crBy) {
      statForUser = true;
      searchData = {
        crBy: stat.vwBy
      };
    }

    $http.post('/ad/search', searchData).success(function(data) {
      if (data.length == 0) {
        MatrimonyUtils.error(
          "The user's profile is under security review. Please view this within next 24hrs.");
        return;
      }
      $scope.selectedDetail.vwAds = data;
      MatrimonyUtils.initCarousal();
      if (stat.status && (!stat.read) && (!statForUser)) {
        $http.post('/stats/mark-read', {
          id: stat.id
        }).success(function(data) {
          stat.read = true;
        });
      }
    });
  };
  $scope.acceptedby = function(ad) {
    var statId = $scope.selectedDetail.id;
    var entity = '/acceptedby-contact';
    if ($scope.forUId == $scope.selectedDetail.ad.attr.crBy) {
      entity = '/accepted-contact';
    }
    $http.get('/stats/' + statId + entity).success(function(data) {
      ad.contact = data;
    });
  };
}]).controller('LinkController', ['$scope', '$rootScope', '$http', '$location','MatrimonyUtils', function($scope, $rootScope, $http,
  $location,MatrimonyUtils) {
  $scope.isActive = function(loc) {
    var lindex = 0;
    while (lindex < loc.length) {
      if (loc[lindex++] === $location.path()) return true;
    }
  };
  $scope.signout = function() {
    $http.post('/signout').success(function() {
    	MatrimonyUtils.logout();
    });

  };

}]).controller('AccountController', ['$scope', '$rootScope', '$http', '$timeout', 'MatrimonyUtils', function($scope,
  $rootScope, $http, $timeout, MatrimonyUtils) {
  $scope.user = {};
  $scope.user.info = {}, $scope.user.meta = {};
  $scope.user.info.name = $rootScope.loggedUser.name;
  $scope.user.info.cell = $rootScope.loggedUser.cell;
  $scope.user.info.mail = $rootScope.loggedUser.mail;
  $scope.user.meta.mobSec = $rootScope.loggedprivacy;
  $scope.$on('UINFO', function(event, data) {
    $scope.user.info.name = data.contact.name;
    $scope.user.info.cell = data.contact.cell;
    $scope.user.info.mail = data.contact.mail;
    $scope.user.meta.mobSec = data.loggedprivacy;
  });

  $scope.updateName = function(user) {
    if (user.info.name == $rootScope.loggedUser.name)
      return;
    $http.post('/user/update/name', user).success(function() {
      $rootScope.loggedUser.name = user.info.name;
      MatrimonyUtils.success('Contact name updated successfully.');
    });
  };

  $scope.updatePass = function(user) {
    $http.post('/user/update/pass', user).success(function() {
      MatrimonyUtils.success('Password updated successfully.');
    });
  };
  $scope.updatePrivacy = function(user) {
    $http.post('/user/update/privacy', user).success(function() {
      $rootScope.loggedprivacy = user.meta.mobSec;
      MatrimonyUtils.success('Privacy control updated successfully.');
    });
  };

}]).controller('VerifyController', ['$scope', '$rootScope', '$http', '$location', 'MatrimonyUtils', '$timeout',
  function($scope, $rootScope, $http, $location, MatrimonyUtils, $timeout) {
    $scope.user = {};
    $scope.user.meta = {};
    //$scope.user.meta.mobSec="accepted";
    $scope.verify = function(user) {
      if ($scope.activationForm.$invalid) {
        $scope.showError = true;
        return;
      }
      user.cellCode = $("#cellCode").val();
      user.cellNumber = parseInt($("#cellNumber").val(), 10);
      $http.post('/user/verify', user).success(function() {
        $rootScope.loggedUser.cell = user.cellCode + user.cellNumber;
        $rootScope.loggedprivacy = user.meta.mobSec;
        $location.path("/profile");
      });
    };
    $scope.resendMail = function() {
      $http.get('/user/verify/send-mail').success(function() {
        MatrimonyUtils.success('Your Activation email was sent successfully.');
      });
    };
    $scope.changeSendMail = function(user) {
      if ($scope.emailForm.$invalid) {
        $scope.showMailError = true;
        return;
      }
      $scope.showMailError = false;
      $http.post('/user/change-send-mail', user).success(function() {
        $rootScope.loggedUser.mail = user.info.mail;
        MatrimonyUtils.success('Email updated and Activation mail sent. Please check your mailbox.');
      });

    };
    $timeout(function() {
      $("#cellCode").intlTelInput({
        autoHideDialCode: false,
        dialCodeDelimiter: "",
        defaultStyling: "outside",
        preferredCountries: ["in", "us", "gb", "ca", "nz"]
      });
    });
  }
]).controller('GunStatController', ['$location', '$scope', '$http', '$timeout', 'MatrimonyUtils', function($location,
  $scope, $http, $timeout, MatrimonyUtils) {
  $scope.requestPath = "/gun-match";
  if ($location.path().indexOf("pic-requests") != -1) {
    $scope.requestPath = "/request-pic";
  }

  $scope.stats = [];
  $scope.search = true;
  $scope.gunAllowed = true;
  $scope.noRecords = false;
  $scope.currPg = 0;
  $scope.atrDef = atrDef;
  $scope.pager = true;
  $scope.pgSize = 10;
  $scope.pageSearch = function(num) {
    $scope.currPg = num;
    $scope.getInterests(num);

  };

  $scope.getInterests = function(num) {
    $http.get($scope.requestPath + '/interests/pg/' + num).success(function(data) {
      if (num != 0 && data.length == 0) {
        $scope.currPg--;
        $scope.endPg = $scope.currPg;
      } else {
        if (num == 0 && data.length < $scope.pgSize) {
          $scope.pager = false;
          if (data.length == 0) $scope.noRecords = true;
        } else {
          $scope.pager = true;
        }
        $scope.stats = data;
      }
    });
  };
  $scope.getInterests(0);
  $scope.vwbyDetails = function(stat) {
    $scope.selectedDetail = stat;
    if ($scope.selectedDetail.vwAds) {
      MatrimonyUtils.initCarousal();
      return;
    }
    $http.get('/ad/uid/' + stat.vwBy).success(function(data) {
      if (data.length == 0) {
        MatrimonyUtils.error(
          "The user's profile is under security review. Please view this within next 24hrs.");
        return;
      }
      $scope.selectedDetail.vwAds = data;
      MatrimonyUtils.initCarousal();
      if (!stat.read) {
        $http.post($scope.requestPath + '/mark-read', {
          id: stat.id
        }).success(function(data) {
          stat.read = true;
        });
      }
    });
  };

  MatrimonyUtils.initCommonActions($http, $scope);
}]);

function zodContent() {
  return $('#' + $(this).data("zodiac")).html();
}
/**
 * http://www.benknowscode.com/2014/01/resizing-images-in-browser-using-canvas.html
 * http://marx-tseng.appspot.com/image_crop/index.html
 * https://hacks.mozilla.org/2011/01/how-to-develop-a-html5-image-uploader/
 * Also see below if you want to dynamically calculate the ratio and stop downsampling based on size
 * http://stackoverflow.com/questions/18557497/how-to-get-html5-canvas-todataurl-file-size-in-javascript
 * http://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs
 */
function resizeUpload(src,$http,MatrimonyUtils,$scope) {
	var tmp = new Image(), reqW, reqH, canvas, cW, cH;
	tmp.onerror = function(a,b,v,d){
		MatrimonyUtils.error("Invalid image type");
		 $scope.uploadWait = false;
		 $scope.$apply();
	};
	tmp.onload = function() {

		//init time: get aspect ratio
		if (angular.isUndefined(canvas)) {
			canvas = document.createElement('canvas');
			//following 220x270 size: get a bit larger image 
			var MAX_WIDTH = 440;
			var MAX_HEIGHT = 540;
			reqW = tmp.naturalWidth;
			reqH = tmp.naturalHeight;

			if (reqW > reqH) {
				if (reqW > MAX_WIDTH) {
					reqH *= MAX_WIDTH / reqW;
					reqW = MAX_WIDTH;
				}
			} else {
				if (reqH > MAX_HEIGHT) {
					reqW *= MAX_HEIGHT / reqH;
					reqH = MAX_HEIGHT;
				}
			}

		}

		cW = tmp.naturalWidth / 2;
		cH = tmp.naturalHeight / 2;

		if (cW < reqW) {
			cW = reqW;
		}
		if (cH < reqH) {
			cH = reqH;
		}

		canvas.width = cW;
		canvas.height = cH;
		canvas.getContext('2d').drawImage(tmp, 0, 0, cW, cH);


		if (cW <= reqW || cH <= reqH) {
			    canvas.toBlob(
			        function (blob) {
			            var formData = new FormData();
			            formData.append('file', blob, "File");
			             
						 $http.post("/attach/upload", formData, {
							transformRequest: angular.identity,
							headers: {'Content-Type': undefined}
						}).success(function(data){
						   MatrimonyUtils.fileUploadDone(data,$scope);
						})['finally'](function(){
							$scope.uploadWait = false;
						});
						
			        },
			        'image/jpeg'
			    );
			return;
		}
		tmp.src = canvas.toDataURL('image/jpeg', 0.9);
	};
	tmp.src = src;

}

////
