import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function TC() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return(
        <main className='tc'>
            <div class="entry-content">
            <Link to='..' className='back'> &lt; Back to Home</Link>
                <h2>Terms &amp; Conditions</h2>
                <hr></hr>
                <p><strong>Acceptance of Terms</strong></p>
                <p>1. These Terms of Use apply to all websites owned and/or operated by AEK Communications (“AEK”). These Terms of Use also apply to the various services, including all information, communications, links, software, enewsletters, products, services, other materials and any and all other services that may be added, offered or provided to you from time to time (the “Services”) through this / these site(s) (the “Site” which shall include the Services).</p>
                <p>2. By accessing or using the Site, you agree to be legally bound by these Terms of Use.</p>
                <p>3. These Terms of Use may be revised or updated from time to time. The revised or updated Terms of Use will be posted on the Site and your continued use of the Site shall be deemed and construed as your conclusive and binding acceptance of the revision or updated terms.</p>
                <p>4. In addition, particular service(s) added, offered or provided to you through the Site, may be subject to additional guidelines and/or rules. In such an event, all such guidelines and/or rules shall be deemed incorporated in these Terms of Use by reference. AEK may also offer other services that are governed by different terms of service / terms of use. Use of such other services shall accordingly be subject to such different terms of service / terms of use.</p>
                <p><strong>Linked Content</strong></p>
                <p>5. The Site and Services provide you with opportunities to link to, or otherwise use, sites and services offered through or by third-party(ies). Your use of these third-party services is subject to terms posted by these third-party(ies). We have no control over any third-party site or service and we are not responsible for any changes to any third-party service or for the contents thereof, including, without limitation, any links that may be contained in or accessible through such third-party service. These links are provided solely as a convenience to you. You will need to make your own independent judgment regarding your interaction with these third-party sites or services. Our inclusion of advertisements for, or links to, a third-party site or service does not constitute an endorsement.</p>
                <p><strong>About Our Services</strong></p>
                <p>6. All Services and the Site are provided on an “AS IS WHERE IS” basis. AEK makes no representation or warranty, whether express or implied (to the extent permitted by law) : (a) as to the use, security, accuracy, reliability, non-infringement, satisfactory quality or fitness for any particular purpose of the Site; or (b) that the use of the Site will be uninterrupted and free of any viruses or bugs.</p>
                <p>7. In no event shall AEK or any of its affiliates or related corporations be liable for any loss, injury, damage, claims, costs or expense of any kind arising from any error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus or other harmful elements, communication line failure, breach of contract, tort, negligence, defamation, copyright infringement, breach of intellectual property right or any other cause of action.</p>
                <p><strong>Intellectual Property</strong></p>
                <p>8. All content and materials on the Site are the exclusive property of AEK or its content suppliers, and may be downloaded or printed for your own personal and non-commercial use only. All copyright notices on downloaded or printed material must be retained. Save as specifically permitted here, you may not copy, reproduce, distribute, republish, repost, modify, transmit, make available to the public, adapt, create a derivative work or otherwise use or exploit any content on the Site in any way or for any purpose. In addition, you may not distribute or make available any part of the Site over any other website or any network.</p>
                <p>9. The names, trade marks, service marks and logos (the “Trade Marks”) displayed on the Site are registered or unregistered Trade Marks of AEK, its affiliates or licensors. Nothing on this Site should be construed as granting by implication, estoppel or otherwise, any license or right to use any such Trade Marks. AEK prohibits use of the Trade Marks as a “hot” link or in-link to any AEK site or other site unless establishment of such a link is approved in advance by AEK in writing.</p>
                <p><strong>Indemnities</strong></p>
                <p>10. You agree to defend and hold AEK, its affiliates and related corporations from and against all claims, losses, damages, costs and expenses, including legal fees on an indemnity basis, arising out of your use of the Site or any breach of these terms. In addition, AEK may use whatever information that is available about you to stop any such breach or any unlawful or inappropriate use of the Site, including informing any third party AEK deems appropriate of such breach or use and/or disclosing your personal information to such third party.</p>
                <p><strong>Severability</strong></p>
                <p>11. If any of these terms is held to be invalid or unenforceable, such term shall be struck out and the remaining terms shall be enforced. Any failure to act by AEK with respect to any breach by you or others of any of the provisions of these terms and conditions does not waive AEK’s right to act with respect to subsequent or similar breaches.</p>
                <p><strong>Governing Laws</strong></p>
                <p>12. These terms shall be governed by Singapore laws and any dispute arising out of the use of the Site shall be referred to the Singapore courts.</p>
            </div>
        </main>
    )
}