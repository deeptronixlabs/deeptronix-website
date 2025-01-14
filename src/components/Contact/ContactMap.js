import React from "react";

export default function ContactMap() {
  return (
    <section className="overflow-hidden mt-10 md:mt-[130px] w-full">
      <div className="max-w-[1780px] relative w-full h-[240px] sm:h-[450px] md:h-[540px] lg:h-[700px] xl:h-[700px] mx-auto xl:rounded-lg overflow-hidden bg-red-300">
        <iframe
          className="map-iframe"
          width="1780"
          height="850"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147069.87212384734!2d101.60441647086657!3d3.1385026472180444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff540d86c99!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e1!3m2!1sen!2smy!4v1734199604599!5m2!1sen!2smy"
        ></iframe>
      </div>
    </section>
  );
}
