import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface FormData {
  organization: string;
  fullName: string;
  position: string;
  education: string;
  totalExperience: string;
  orgExperience: string;
  discipline: string;
  
  performanceYear1: string;
  performanceYear2: string;
  performanceYear3: string;
  qualityYear1: string;
  qualityYear2: string;
  qualityYear3: string;
  dynamics: string;
  
  specialNeeds: string;
  
  mentorship: string;
  educationalWork: string;
  
  competitions: string;
  
  personalCompetitions: string;
  
  methodology: string;
  innovations: string;
  
  events: string;
  
  awards: string;
}

export default function Index() {
  const [formData, setFormData] = useState<FormData>({
    organization: '',
    fullName: '',
    position: '',
    education: '',
    totalExperience: '',
    orgExperience: '',
    discipline: '',
    performanceYear1: '',
    performanceYear2: '',
    performanceYear3: '',
    qualityYear1: '',
    qualityYear2: '',
    qualityYear3: '',
    dynamics: '',
    specialNeeds: '',
    mentorship: '',
    educationalWork: '',
    competitions: '',
    personalCompetitions: '',
    methodology: '',
    innovations: '',
    events: '',
    awards: ''
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8 text-center animate-fade-in">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Справка о профессиональных достижениях</h1>
          <p className="text-slate-600">Конкурс «Мастер года»</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-6 animate-fade-in">
            <Card className="p-6">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="general" className="text-xs">Общие</TabsTrigger>
                  <TabsTrigger value="results" className="text-xs">Результаты</TabsTrigger>
                  <TabsTrigger value="work" className="text-xs">Работа</TabsTrigger>
                  <TabsTrigger value="awards" className="text-xs">Награды</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-4">
                  <div>
                    <Label htmlFor="organization">Образовательная организация</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => updateField('organization', e.target.value)}
                      placeholder="Название организации"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fullName">ФИО участника</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      placeholder="Иванов Иван Иванович"
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Должность</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) => updateField('position', e.target.value)}
                      placeholder="Мастер производственного обучения"
                    />
                  </div>
                  <div>
                    <Label htmlFor="education">Образование</Label>
                    <Textarea
                      id="education"
                      value={formData.education}
                      onChange={(e) => updateField('education', e.target.value)}
                      placeholder="Высшее профессиональное, специальность..."
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="totalExperience">Общий стаж (лет)</Label>
                      <Input
                        id="totalExperience"
                        value={formData.totalExperience}
                        onChange={(e) => updateField('totalExperience', e.target.value)}
                        placeholder="15"
                      />
                    </div>
                    <div>
                      <Label htmlFor="orgExperience">Стаж в организации (лет)</Label>
                      <Input
                        id="orgExperience"
                        value={formData.orgExperience}
                        onChange={(e) => updateField('orgExperience', e.target.value)}
                        placeholder="8"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="discipline">Преподаваемая профессия/специальность</Label>
                    <Input
                      id="discipline"
                      value={formData.discipline}
                      onChange={(e) => updateField('discipline', e.target.value)}
                      placeholder="Сварщик, Слесарь..."
                    />
                  </div>
                </TabsContent>

                <TabsContent value="results" className="space-y-4">
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Успеваемость за 3 года (%)</Label>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <Label htmlFor="perf1" className="text-xs text-slate-600">Год 1</Label>
                        <Input
                          id="perf1"
                          value={formData.performanceYear1}
                          onChange={(e) => updateField('performanceYear1', e.target.value)}
                          placeholder="95"
                        />
                      </div>
                      <div>
                        <Label htmlFor="perf2" className="text-xs text-slate-600">Год 2</Label>
                        <Input
                          id="perf2"
                          value={formData.performanceYear2}
                          onChange={(e) => updateField('performanceYear2', e.target.value)}
                          placeholder="97"
                        />
                      </div>
                      <div>
                        <Label htmlFor="perf3" className="text-xs text-slate-600">Год 3</Label>
                        <Input
                          id="perf3"
                          value={formData.performanceYear3}
                          onChange={(e) => updateField('performanceYear3', e.target.value)}
                          placeholder="98"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Качество обучения (%)</Label>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <Label htmlFor="qual1" className="text-xs text-slate-600">Год 1</Label>
                        <Input
                          id="qual1"
                          value={formData.qualityYear1}
                          onChange={(e) => updateField('qualityYear1', e.target.value)}
                          placeholder="85"
                        />
                      </div>
                      <div>
                        <Label htmlFor="qual2" className="text-xs text-slate-600">Год 2</Label>
                        <Input
                          id="qual2"
                          value={formData.qualityYear2}
                          onChange={(e) => updateField('qualityYear2', e.target.value)}
                          placeholder="88"
                        />
                      </div>
                      <div>
                        <Label htmlFor="qual3" className="text-xs text-slate-600">Год 3</Label>
                        <Input
                          id="qual3"
                          value={formData.qualityYear3}
                          onChange={(e) => updateField('qualityYear3', e.target.value)}
                          placeholder="90"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="dynamics">Динамика результатов</Label>
                    <Textarea
                      id="dynamics"
                      value={formData.dynamics}
                      onChange={(e) => updateField('dynamics', e.target.value)}
                      placeholder="Положительная динамика роста показателей..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="specialNeeds">Работа с обучающимися с ОВЗ</Label>
                    <Textarea
                      id="specialNeeds"
                      value={formData.specialNeeds}
                      onChange={(e) => updateField('specialNeeds', e.target.value)}
                      placeholder="Индивидуальные образовательные маршруты..."
                      rows={3}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="work" className="space-y-4">
                  <div>
                    <Label htmlFor="educationalWork">Воспитательная работа</Label>
                    <Textarea
                      id="educationalWork"
                      value={formData.educationalWork}
                      onChange={(e) => updateField('educationalWork', e.target.value)}
                      placeholder="Кураторство групп, проведение внеклассных мероприятий..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="mentorship">Наставничество</Label>
                    <Textarea
                      id="mentorship"
                      value={formData.mentorship}
                      onChange={(e) => updateField('mentorship', e.target.value)}
                      placeholder="Программы наставничества, количество наставляемых..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="competitions">Подготовка победителей конкурсов</Label>
                    <Textarea
                      id="competitions"
                      value={formData.competitions}
                      onChange={(e) => updateField('competitions', e.target.value)}
                      placeholder="WorldSkills Russia, Абилимпикс, олимпиады..."
                      rows={4}
                    />
                  </div>
                  <div>
                    <Label htmlFor="personalCompetitions">Участие в конкурсах профмастерства</Label>
                    <Textarea
                      id="personalCompetitions"
                      value={formData.personalCompetitions}
                      onChange={(e) => updateField('personalCompetitions', e.target.value)}
                      placeholder="Названия конкурсов, достижения..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="methodology">Методическая деятельность</Label>
                    <Textarea
                      id="methodology"
                      value={formData.methodology}
                      onChange={(e) => updateField('methodology', e.target.value)}
                      placeholder="Разработка учебных программ, пособий..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="innovations">Инновационная деятельность</Label>
                    <Textarea
                      id="innovations"
                      value={formData.innovations}
                      onChange={(e) => updateField('innovations', e.target.value)}
                      placeholder="Внедрение новых технологий обучения..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="events">Участие в мероприятиях</Label>
                    <Textarea
                      id="events"
                      value={formData.events}
                      onChange={(e) => updateField('events', e.target.value)}
                      placeholder="Конференции, форумы, семинары (региональные, всероссийские)..."
                      rows={4}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="awards" className="space-y-4">
                  <div>
                    <Label htmlFor="awards">Награды и поощрения</Label>
                    <Textarea
                      id="awards"
                      value={formData.awards}
                      onChange={(e) => updateField('awards', e.target.value)}
                      placeholder="Почетные грамоты, благодарности, звания..."
                      rows={8}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          <div className="animate-fade-in print-area">
            <Card className="p-8 bg-white shadow-lg">
              <div className="document-header mb-8 text-center border-b-2 border-slate-800 pb-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">СПРАВКА</h2>
                <p className="text-sm text-slate-600">о профессиональных достижениях кандидата</p>
                <p className="text-sm text-slate-600">на участие в отборочном этапе конкурса «Мастер года»</p>
              </div>

              <div className="document-content space-y-6 text-sm">
                {formData.organization && (
                  <div className="section">
                    <p className="font-semibold text-slate-800">{formData.organization}</p>
                  </div>
                )}

                {formData.fullName && (
                  <div className="section">
                    <h3 className="font-bold text-slate-900 mb-2 text-base">I. ОБЩИЕ ДАННЫЕ</h3>
                    <p><span className="font-semibold">ФИО:</span> {formData.fullName}</p>
                    {formData.position && <p><span className="font-semibold">Должность:</span> {formData.position}</p>}
                    {formData.education && <p><span className="font-semibold">Образование:</span> {formData.education}</p>}
                    {formData.totalExperience && <p><span className="font-semibold">Общий педагогический стаж:</span> {formData.totalExperience} лет</p>}
                    {formData.orgExperience && <p><span className="font-semibold">Стаж работы в организации:</span> {formData.orgExperience} лет</p>}
                    {formData.discipline && <p><span className="font-semibold">Преподаваемая профессия/специальность:</span> {formData.discipline}</p>}
                  </div>
                )}

                {(formData.performanceYear1 || formData.qualityYear1 || formData.dynamics) && (
                  <div className="section">
                    <h3 className="font-bold text-slate-900 mb-2 text-base">II. РЕЗУЛЬТАТЫ ОБУЧЕНИЯ</h3>
                    {(formData.performanceYear1 || formData.performanceYear2 || formData.performanceYear3) && (
                      <div className="mb-3">
                        <p className="font-semibold mb-1">Успеваемость:</p>
                        <div className="pl-4">
                          {formData.performanceYear1 && <p>Первый год: {formData.performanceYear1}%</p>}
                          {formData.performanceYear2 && <p>Второй год: {formData.performanceYear2}%</p>}
                          {formData.performanceYear3 && <p>Третий год: {formData.performanceYear3}%</p>}
                        </div>
                      </div>
                    )}
                    {(formData.qualityYear1 || formData.qualityYear2 || formData.qualityYear3) && (
                      <div className="mb-3">
                        <p className="font-semibold mb-1">Качество обучения:</p>
                        <div className="pl-4">
                          {formData.qualityYear1 && <p>Первый год: {formData.qualityYear1}%</p>}
                          {formData.qualityYear2 && <p>Второй год: {formData.qualityYear2}%</p>}
                          {formData.qualityYear3 && <p>Третий год: {formData.qualityYear3}%</p>}
                        </div>
                      </div>
                    )}
                    {formData.dynamics && <p><span className="font-semibold">Динамика:</span> {formData.dynamics}</p>}
                    {formData.specialNeeds && (
                      <div className="mt-3">
                        <p className="font-semibold mb-1">Работа с обучающимися с ОВЗ и инвалидами:</p>
                        <p className="pl-4">{formData.specialNeeds}</p>
                      </div>
                    )}
                  </div>
                )}

                {(formData.educationalWork || formData.mentorship) && (
                  <div className="section">
                    <h3 className="font-bold text-slate-900 mb-2 text-base">III. ВОСПИТАТЕЛЬНАЯ РАБОТА И НАСТАВНИЧЕСТВО</h3>
                    {formData.educationalWork && <p className="mb-2">{formData.educationalWork}</p>}
                    {formData.mentorship && <p>{formData.mentorship}</p>}
                  </div>
                )}

                {formData.competitions && (
                  <div className="section">
                    <h3 className="font-bold text-slate-900 mb-2 text-base">IV. ПОДГОТОВКА УЧАСТНИКОВ И ПОБЕДИТЕЛЕЙ КОНКУРСОВ</h3>
                    <p>{formData.competitions}</p>
                  </div>
                )}

                {formData.personalCompetitions && (
                  <div className="section">
                    <h3 className="font-bold text-slate-900 mb-2 text-base">V. УЧАСТИЕ В КОНКУРСАХ ПРОФЕССИОНАЛЬНОГО МАСТЕРСТВА</h3>
                    <p>{formData.personalCompetitions}</p>
                  </div>
                )}

                {(formData.methodology || formData.innovations) && (
                  <div className="section">
                    <h3 className="font-bold text-slate-900 mb-2 text-base">VI. МЕТОДИЧЕСКАЯ И ИННОВАЦИОННАЯ ДЕЯТЕЛЬНОСТЬ</h3>
                    {formData.methodology && <p className="mb-2">{formData.methodology}</p>}
                    {formData.innovations && <p>{formData.innovations}</p>}
                  </div>
                )}

                {formData.events && (
                  <div className="section">
                    <h3 className="font-bold text-slate-900 mb-2 text-base">VII. УЧАСТИЕ В МЕРОПРИЯТИЯХ</h3>
                    <p>{formData.events}</p>
                  </div>
                )}

                {formData.awards && (
                  <div className="section">
                    <h3 className="font-bold text-slate-900 mb-2 text-base">VIII. НАГРАДЫ И ПООЩРЕНИЯ</h3>
                    <p>{formData.awards}</p>
                  </div>
                )}
              </div>

              <div className="document-footer mt-8 pt-4 border-t border-slate-300">
                <div className="grid grid-cols-2 gap-8 text-sm">
                  <div>
                    <p className="mb-4">Руководитель организации</p>
                    <div className="border-b border-slate-400 mb-1"></div>
                    <p className="text-xs text-slate-500">(подпись)</p>
                  </div>
                  <div>
                    <p className="mb-4">М.П.</p>
                    <div className="border-b border-slate-400 mb-1"></div>
                    <p className="text-xs text-slate-500">(дата)</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-4 no-print">
              <Button onClick={handlePrint} className="w-full" size="lg">
                <Icon name="Printer" className="mr-2" size={20} />
                Печать справки
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
