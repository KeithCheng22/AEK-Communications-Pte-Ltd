import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function PP() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return(
        <main className='tc'>
            <div class="entry-content">
                <Link to='..' className='back'> &lt; Back to Home</Link>
                <h2>Privacy Policy</h2>
                <hr></hr>
                <p>This Privacy Policy sets forth the privacy policy pertaining to this Site maintained by AEK Communications – www.aek.com.sg, and all sites of the AEK Communications which are linked to this Site (collectively, the “Sites”). By using any Site, you are agreeing to the terms set forth in this Privacy Policy.</p>
                <p>For purposes of this Privacy Policy, “Personal Information” means any information by which you can be personally identified, and includes your name, your address, your telephone number, your e-mail address and the like. Most Sites do not require that you submit Personal Information to us. However, some Sites may request Personal Information in order to help us serve you more effectively. AEK Communications collects Personal Information only when you voluntarily submit such Personal Information to us, such as when placing a product order through a Site, when entering a contest, when posting a message to a forum, and so on.</p>
                <p>For each visitor to the Sites, our web servers automatically recognize only information regarding the visitor’s domain name (or that of the visitor’s access provider) and e-mail address. Regardless of the purpose for which it is submitted, it is AEK Communications’s policy to maintain all Personal Information as confidential, and to use such Personal Information only for the following purposes:</p>
                <ul>
                <li>for the specific purpose for which it was volunteered for example, to complete a product purchase, to enter a contest, to post a message to one of our forums, etc.;</li>
                <li>to improve the content, appearance and utility of the Sites;</li>
                <li>to track our visitors’ use of the Sites for internal market research; and</li>
                <li>to notify our visitors of updates to the Sites.</li>
                </ul>
                <p>It is AEK Communications’s policy to keep Personal Information only for so long as needed for such purposes. At any time, you may obtain a summary of the Personal Information on record with AEK Communications which has been collected about you via this Site. Except for Personal Information we need to complete your purchase of products, you may request at any time that AEK Communications dispose of any or all Personal Information about you. In addition, at any time you may request:</p>
                <p>i. that AEK Communications correct any such Personal Information; or</p>
                <p>ii. that such Personal Information be removed from AEK’s marketing databases.</p>
                <p>To make any request described above, send an e-mail to <b><a style={{textDecoration: 'none', color:'#213547'}} href="mailto:sales@aek.com.sg">sales@aek.com.sg</a></b>. When contacting us, please be sure to provide us with your exact e-mail address, name, address and/or telephone number(s) in order to be sure we handle your request correctly.</p>
                <p>AEK Communications reserves the right, at its discretion, to change, modify, add, or remove portions of this Privacy Policy at any time. You should check this page periodically for changes. Your continued use of this Site following the posting of changes to this Privacy Policy will mean that you accept those changes.</p>
                <p>These terms shall be governed by Singapore laws and any dispute arising out of the use of the Site shall be referred to the Singapore courts.</p>
            </div>
        </main>
    )
}