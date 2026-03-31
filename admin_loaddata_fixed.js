        async function loadData() {
            const body = document.getElementById('tableBody');
            const head = document.getElementById('tableHead');
            body.innerHTML = '<tr><td colspan="10" style="text-align:center; padding:3rem">Loading data from Firebase...</td></tr>';

            try {
                // Map Tab ID to actual Firestore Collection Name
                const collName = currentTab === 'proofs' ? 'payment_proofs' : currentTab;
                
                const snapshot = await db.collection(collName).orderBy('timestamp', 'desc').get();
                const docs = snapshot.docs;
                
                if (docs.length === 0) {
                    body.innerHTML = '<tr><td colspan="10" style="text-align:center; padding:3rem; color:#888">No records found in this category.</td></tr>';
                    return;
                }
                
                body.innerHTML = '';
                
                if (currentTab === 'donations') {
                    head.innerHTML = '<tr><th>Date</th><th>Name</th><th>Email</th><th>Amount</th><th>Purpose</th><th>Status</th><th>Actions</th></tr>';
                    let total = 0; docs.forEach(doc => {
                        const data = doc.data(); 
                        total += parseFloat(data.amount || 0);
                        body.innerHTML += `
                            <tr>
                                <td>${new Date(data.timestamp).toLocaleDateString()}</td>
                                <td>${data.name}</td>
                                <td>${data.email}</td>
                                <td>₹${data.amount}</td>
                                <td><span class="badge badge-info">${data.purpose || 'General'}</span></td>
                                <td><span class="badge ${data.status === 'verified' ? 'badge-verified' : 'badge-pending'}">${data.status}</span></td>
                                <td><button class="btn-action btn-verify" onclick="updateStatus('donations', '${doc.id}', 'verified')">Tick</button></td>
                            </tr>
                        `;
                    });
                    document.getElementById('statCount').textContent = docs.length;
                    document.getElementById('statTotal').textContent = '₹' + total.toLocaleString('en-IN');
                } 
                else if (currentTab === 'proofs') {
                    head.innerHTML = '<tr><th>Date</th><th>Donor</th><th>Email</th><th>File Name</th><th>Preview</th><th>Status</th><th>Actions</th></tr>';
                    docs.forEach(doc => {
                        const data = doc.data();
                        body.innerHTML += `
                            <tr>
                                <td>${new Date(data.timestamp).toLocaleDateString()}</td>
                                <td>${data.donorName}</td>
                                <td>${data.donorEmail}</td>
                                <td style="color:var(--clay)">📄 ${data.fileName}</td>
                                <td><button class="btn-action" style="background:#444; color:white;" onclick="alert('Image: ${data.fileName}\\n(Firebase Storage required for live view)')">👁️ View</button></td>
                                <td><span class="badge ${data.status === 'verified' ? 'badge-verified' : 'badge-pending'}">${data.status}</span></td>
                                <td><button class="btn-action btn-verify" onclick="updateStatus('payment_proofs', '${doc.id}', 'verified')">Approve</button></td>
                            </tr>
                        `;
                    });
                }
                else if (currentTab === 'messages') {
                    head.innerHTML = '<tr><th>Date</th><th>From</th><th>Subject</th><th>Message</th></tr>';
                    docs.forEach(doc => {
                        const data = doc.data();
                        body.innerHTML += `
                            <tr>
                                <td>${new Date(data.timestamp).toLocaleDateString()}</td>
                                <td><b>${data.name}</b><br>${data.email}</td>
                                <td>${data.subject}</td>
                                <td>${data.message}</td>
                            </tr>
                        `;
                    });
                }
                else if (currentTab === 'newsletter') {
                    head.innerHTML = '<tr><th>Join Date</th><th>Subscriber Email</th></tr>';
                    docs.forEach(doc => {
                        const data = doc.data();
                        body.innerHTML += `
                            <tr>
                                <td>${new Date(data.timestamp).toLocaleDateString()}</td>
                                <td>${data.email}</td>
                            </tr>
                        `;
                    });
                }
            } catch (err) {
                console.error("Firebase Error:", err);
                body.innerHTML = `<tr><td colspan="10" style="text-align:center; padding:3rem; color:var(--error)">❌ Data Load Failed: ${err.message}. Check console for details.</td></tr>`;
            }
        }
