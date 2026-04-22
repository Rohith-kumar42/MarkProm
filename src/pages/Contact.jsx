import InquiryForm from '../components/InquiryForm';

const formFields = [
  { id: 'firstName', label: 'First Name',      type: 'text',  placeholder: 'John',               required: true,  half: true },
  { id: 'lastName',  label: 'Last Name',       type: 'text',  placeholder: 'Doe',                required: true,  half: true },
  { id: 'email',     label: 'Email Address',   type: 'email', placeholder: 'john@example.com',   required: true,  half: true },
  { id: 'phone',     label: 'Phone Number',    type: 'tel',   placeholder: '+91 00000 00000',    required: false, half: true },
  {
    id: 'interest', label: 'Area of Interest', type: 'select', required: false, half: false,
    options: [
      { value: 'resorts', label: 'Resorts' },
      { value: 'land',    label: 'Land Plots' },
      { value: 'other',   label: 'Other Inquiry' },
    ],
  },
  { id: 'message', label: 'Message', type: 'textarea', placeholder: 'How can we help you?', required: false, half: false },
];

export default function Contact() {
  return (
    <main className="page-enter flex-grow pt-32 pb-24 px-6 md:px-12 min-h-screen">
      {/* Hero text */}
      <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6 leading-tight">Get in Touch</h1>
        <p className="font-body text-on-surface-variant text-lg leading-relaxed">
          We invite you to reach out for inquiries regarding our premium land acquisitions and architectural developments. Our team is ready to assist you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left – Info + Map */}
        <div className="space-y-10">
          {/* Corporate Office card */}
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_20px_50px_rgba(38,39,125,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-primary">
              <span className="material-symbols-outlined text-8xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}>apartment</span>
            </div>
            <h2 className="font-headline text-3xl text-primary mb-8 relative z-10">Corporate Office</h2>
            <div className="space-y-8 relative z-10">
              {[
                {
                  icon: 'location_on',
                  label: 'Address',
                  content: (
                    <>1933, 2nd Floor,<br />Karthikeya Stores Upstairs,<br />Trichy Road, CBE - 641 045</>
                  ),
                },
                { icon: 'phone',  label: 'Phone', content: '73393 36300' },
                { icon: 'mail',   label: 'Email', content: 'admin@markprom.com' },
              ].map(({ icon, label, content }) => (
                <div key={label} className="flex items-start gap-4 group">
                  <div className="bg-surface-container-low p-3 rounded-lg text-primary
                                  group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <div>
                    <h3 className="font-label text-sm uppercase tracking-widest text-secondary mb-1">{label}</h3>
                    <p className="font-body text-on-surface leading-relaxed">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="h-80 bg-surface-container-high rounded-xl overflow-hidden relative
                          shadow-[0_20px_50px_rgba(38,39,125,0.05)]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLFbmfr6ds8DfbVe1uU-P-dA2qWWBK0TPGWyaZQEZ3CwP9zuExS-RxIzSyy4GMLuXQ4T-6y9j8uPgAKnnvnKdsCiCMJQxcF0DWZCHmKEkD3F0uHBH-7cFhL4-vTm401KdYwvO_1tlhXsKnqd_lKTMqRXOSXcsjE5rJN2bgHSG99nMp2D4W8ONPr9cRGrQlmLfcDxx3Gc2NPOTMauEwNHq81w7BHiqSX29cP16r1hXXWhGfYxrNnqtvMEfr034cQ4mjprJ9Dp1q-KNn"
              alt="Office location – Coimbatore"
              className="w-full h-full object-cover opacity-80 mix-blend-multiply"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-primary/90 text-white p-3 rounded-full shadow-lg animate-bounce">
                <span className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right – Form */}
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl
                        shadow-[0_20px_50px_rgba(38,39,125,0.05)] border border-surface-container-high">
          <h2 className="font-headline text-3xl text-primary mb-8">Send a Message</h2>
          <InquiryForm fields={formFields} submitLabel="Submit Inquiry" />
        </div>
      </div>
    </main>
  );
}
