//Khởi tạo thư viện icon của riêng bạn
import { library } from '@fortawesome/fontawesome-svg-core'; 
//icons
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';  

//Add các icon đã được import vào trong thư viện của bạn
library.add( faFacebook, faCode, faHighlighter )