import React from 'react';
import s from './FAQ.module.scss'
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQPage = () => {
    return (
        <div className={s.faq}>
            <div className="container">
                <h1>FAQ</h1>


                <div className={s.faq__items__accordion}>
                    <Accordion className={s.faq__accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1-content"
                            id="panel1-header"

                        >
                            <h2>Какие услуги предоставляет ваша компания?</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            предоставляем широкий спектр услуг: от технической поддержки и ремонта компьютеров до
                            настройки программного обеспечения и консультаций по безопасности данных.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={s.faq__accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1-content"
                            id="panel1-header"

                        >
                            <h2>Каковы рабочие часы вашей компании?</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            Мы работаем семь дней в неделю с 8:00 до 22:00. Для срочных случаев у нас также есть
                            круглосуточная техническая поддержка по телефону.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={s.faq__accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1-content"
                            id="panel1-header"

                        >
                            <h2>Как долго занимает ремонт компьютера?</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            Время ремонта зависит от сложности проблемы. Мы стремимся выполнить ремонт максимально
                            быстро, обычно это занимает от нескольких часов до нескольких дней.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={s.faq__accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1-content"
                            id="panel1-header"

                        >
                            <h2>Гарантируете ли вы безопасность моих данных при обслуживании компьютера?</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            Мы придерживаемся строгих правил конфиденциальности и безопасности данных клиентов. Вся
                            информация наших клиентов хранится конфиденциально и обрабатывается с соблюдением всех
                            необходимых мер безопасности.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={s.faq__accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1-content"
                            id="panel1-header"

                        >
                            <h2>Какие методы оплаты вы принимаете?</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            Мы принимаем оплату наличными, банковским переводом и через электронные платежные системы.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={s.faq__accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1-content"
                            id="panel1-header"

                        >
                            <h2>Сколько стоит выезд мастера на дом ?</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            На данный момент бесплатно, если это в перделах города
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;