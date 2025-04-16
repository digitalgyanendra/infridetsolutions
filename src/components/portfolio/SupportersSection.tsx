
import React from "react";
import { motion } from "framer-motion";

const SupportersSection = () => {
  const supporters = [
    {
      name: "Manish Pandey",
      role: "CEO at BeerBiceps",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCKBioz5SNrMM1Ckk8Lr6ABeBTHaKYb7IS_oXNUjy7OMoD7-xV1fZrVSf0wgdLcs9-2vVC8HAhQTHFOYA-7ADfSWVMmdoA2U54RPKK0EqB9B8qi-q4r7iP_7JAWwzU21VNSh7RACJRSwfkEh4nL8s77NjdlbPGJLrI-asYLkImKoeC-U_8YzGtYXMBeVH0"
    },
    {
      name: "Supriya Pau",
      role: "Co-Founder & CEO, Josh Talks",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRZUDrnGsZMaEEor2L4Y7ixxTQE698cOKJHQXgRB51ltpNQTFzPsX7sRbgTQKXkyUmAG3h0lIl2439xZRKfYtekwrCZfMSz25siPkHKUfaEzNNVAazTx3seynhL2coeSsTJT8zPaRwG1ixlDncwgFuOwuUom7HZSY5QoxVFqgiQlpMPu7M0KOd91PsZ-uV"
    },
    {
      name: "Niranjan Hiranandani",
      role: "Co-Founder & MD of Hiranandani Group, Billionaire",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLQ8r4dWg_jKavpD-dD7kSkRqY7q132E-0MH8svlYidJU7cNq0XdnQv0-TixHPEeqMIc7FXeZERZcs7xNcimvz_JNvC8VAJjmq2gSsS1VxOGbz5fZfFZaWM90QOSHVU5Ak9pJGdaKbfJeNBK4NceoJzV2VqGzc1D-4AbdLUOr2_qwq_oO_ovFGVWmaqw-n"
    },
    {
      name: "Deepak Dahiya",
      role: "Motivational Speaker & Influencer",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2Q1_rZUKilXkfyt4tIvIOTsaJJaxDXmGUjiEAg2XY_rCNMy5Tq7yCjIwLuiuju_WhJQdEH6GxOBwzykZoao_an-0G0hPo_jNs03I28rDIW5ylrbmeBfnEUNjPXrclWooZGk8qkbSFgPgvOdkjR1g-MZ9k8dcnUU2B_-Y4B_jMY98G8PpmrfWk6aL4vilc"
    },
    {
      name: "Ankur Warikoo",
      role: "Entrepreneur, Author & Mentor",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiHsZnG3D0X1vRmdKWbYWVIkSNRps1T021AIGb5S09_5gZHsGU_8UhnzLmSmGJ5GksjXCdZQV1HidrqRMOJZnhXsPOlJWMG3m4zveoxZwtdmJ_PWMCx9g39BbcERdr-U_3P9Liq2-7480K0j52ZujI-pD6UUHjRgVTkKonKdsdd2J_NqgDJaNkk0GUh_a_"
    },
    {
      name: "VirAl Kalakar",
      role: "Digital Creator",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbP9xhUrDCD7GqH0mWSZWVUzGqqLSFLxWk49fVIbasmYKKRhE4SuNg9w-N9ex09RZezJRSrVkUg7nWlgBKLSfpI6abGxADdSk6K7RUti8GEPc_fqV0pOgSUUAMLXqs7BCLKOElJnEUB0LMF-YulcGj71tGtU3jsJ8VQaH4xCXsuEPG5vd-1JVQVk97NKEQ"
    },
    {
      name: "Satish K Videos",
      role: "Popular Content Creator",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDk9-bR8E7jobms2h27fHGIefS6fncREvtLZ0IQwTe9YIiH-O8CmlIAiNBypwINUHHl8evfB3H8_SENNL6itH_ZqNYKOhe5AZKz91IYik40s1FcIgMBqnLql5DzGILx8RfTZaAHuyKGv1sqt9P-OUOgdYwNQ1p_AaYek6vPRU4vTFBtFy9fPfOpogEnjiY"
    },
    {
      name: "Rana Singh",
      role: "Champion Boxer",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhND-6Cm3pTu5MPHeusaAELeNFtcai1HTG9Blr4jCWqXArqKpU08cMZt_HFNaI367dszM_JzTxYMI8du8PK9_h5Srso8jte1DWekVQatP8XSWyBkfyTZMZUisZ9poiXQsKc-dXHlSoxZ-X_P76Pwdm_lMAi-j_XXwilzGZMlih0aFY6QlEPiPVmVpd5TMdZ"
    },
    {
      name: "Vijeta Dahiya",
      role: "Poet, Writer, Filmmaker & Researcher",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-UPxNWlKQrn6Bnqp2UBPthmKWCXYbklAEVxMzG9I2sZwTgKU3SWDRXl7goc2sHAdMtA5L47pI92YYLbSqP2q2rccbZVWCf3oCQNIkzsZ9d54wAyIc9cZgIuG4DZh0vskAYUB9F6qTF0vQyGv9MGeObw-810WSbYdocu8PG0vM3BqgslxNDkSPm0hPkRMY"
    },
    {
      name: "Sanjeev Juneja",
      role: "Entrepreneur & Investor (Kesh King, Roop Mantra)",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMRVCuRbXoEtcZt0ePFs-5BK06S8ge5Mu_pqLhxKkiPvYV0d3KCnHYPXd5DaNYtaofZ7TOftgS4bKj-RZc6pf9fuWepLUCaGwF5gpL07xZ9EM1GY0GdO8KuDp7eYqJ_WP-Q5yy6PirE4Uq9354_nvBF367HJZfezFSggs5fOtq_GyV58VOJimR8X8WIBon"
    }
  ];

  return (
    <motion.section 
      id="supporters"
      className="pb-20 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center gradient-text">🤝 People Who Believe in Me</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 text-center">
          Blessed to have met and learned from these inspiring individuals. Their support, mentorship, and belief fuel my journey every day.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
          {supporters.map((supporter, index) => (
            <motion.div 
              key={index}
              className="glass-card p-6 w-full max-w-[350px] transition-all duration-300 hover:scale-105 hover:shadow-orange-500/20 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-5">
                <img 
                  src={supporter.image} 
                  alt={supporter.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">{supporter.name}</h3>
              <p className="text-muted-foreground">{supporter.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SupportersSection;
