const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 pt-6 pb-20">
            <div className="md:w-1/3 flex">
                Contact
            </div>
            <div className="md:w-2/3 flex justify-between">
                <div className="flex gap-x-6">
                    <div className="flex">
                        <a href="mailto:someone@example.com" className="underline underline-offset-4">Email</a>↗
                    </div>
                    <div className="flex">
                        <a href="https://github.com/jdrco" className="underline underline-offset-4">GitHub</a>↗
                    </div>
                    <div className="flex">
                        <a href="https://www.linkedin.com/in/jareddrueco/" className="underline underline-offset-4">LinkedIn</a>↗
                    </div>
                </div>
                <p className="text-[#805AD5] dark:text-[#F6D497]">2024</p>
            </div>
        </div>
    )
}

export default Contact;