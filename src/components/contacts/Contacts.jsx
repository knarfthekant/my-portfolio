import './contacts.css';
import Socials from './Socials';

const Contacts = () => {
    return (
        <section id='contacts' className="text-center">

            <div className="bg-white backdrop-blur-md rounded-xl p-6 w-full max-w-md mx-auto">
                <form
                    action="mailto:g3shan@uwaterloo.ca"
                    method="POST"
                    encType="text/plain"
                    className="flex flex-col gap-4"
                >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="
                        w-full px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg
                        ring-1 ring-gray-200 placeholder-gray-500
                        focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50
                        transition"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="
                        w-full px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg
                    ring-1 ring-gray-200 placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50
                    transition"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    className="
                        w-full px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg
                        ring-1 ring-gray-200 placeholder-gray-500
                        focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50
                        transition"
                    required
                />
                <button
                    type="submit"
                    className="bg-sky-200 text-black font-medium py-2 rounded hover:bg-sky-400 transition-colors"
                >Email me</button>
                </form>
            </div>
            <div className="mt-4">
                <Socials/>
            </div>
        </section>
    )
};

export default Contacts;