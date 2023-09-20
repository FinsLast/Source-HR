const express = require('express')
const router = express.Router();
const controller = require('../controller/controller')

// --------- (Main dashboard) ---------

router.get('/admin-dashboard', controller.dashboard)

router.get('/employee-dashboard', controller.employee_dashboard)

router.get('/mail-view', controller.mail_view)

router.get('/attance-reports', controller.attance_reports)

router.get('/create-invoice', controller.create_invoice)

router.get('/clients-list', controller.clients_list)

router.get('/project-list', controller.project_list)

// -------- ( apps ) ----------

router.get('/chat', controller.chat)

router.get('/video-call', controller.video_call)

router.get('/voice-call', controller.voice_call)

router.get('/outgoing-call', controller.outgoing_call)

router.get('/incoming-call', controller.incoming_call)

router.get('/employees', controller.employees)

router.get('/events', controller.events)

router.get('/contacts', controller.contacts)

router.get('/inbox', controller.inbox)

router.get('/compose', controller.compose)

router.get('/file-manager', controller.file_manager)

// ----------- (employees) --------------------

router.get('/employees-list', controller.employees_list)

router.get('/holidays', controller.holidays)

router.get('/leaves', controller.leaves)

router.get('/leaves-employee', controller.leaves_employee)

router.get('/leave-settings', controller.leave_settings)

router.get('/attendance', controller.attendance)

router.get('/attend-reports', controller.attend_reports)

router.get('/attendance-employee', controller.attendance_employee)

router.get('/departments', controller.departments)

router.get('/designations', controller.designations)

router.get('/timesheet', controller.time_sheet)

router.get('/shift-list', controller.shift_list)

router.get('/shift-scheduling', controller.shift_scheduling)

router.get('/overtime', controller.overtime)

router.get('/clients', controller.clients)

router.get('/projects', controller.projects)

router.get('/tasks', controller.tasks)

router.get('/task-board', controller.task_board)

router.get('/project-view', controller.project_view)

router.get('/leads', controller.leads)

router.get('/tickets', controller.tickets)

router.get('/tickets-view', controller.tickets_view)

// ---------------- (HR) -------------

router.get('/estimates', controller.estimates)

router.get('/estimate-view', controller.estimate_view)

router.get('/create-estimate', controller.create_estimate)

router.get('/edit-estimate', controller.edit_estimate)

router.get('/invoices', controller.invoices)

router.get('/edit-invoice', controller.edit_invoice)

router.get('/invoice-view', controller.invoice_view)

router.get('/payments', controller.payments)

router.get('/expenses', controller.expenses)

router.get('/provident-fund', controller.providentfund)

router.get('/taxes', controller.taxes)

router.get('/categories', controller.categories)

router.get('/sub-category', controller.subcategory)

router.get('/budgets', controller.budgets)

router.get('/budget-expenses', controller.budgetexpenses)

router.get('/budget-revenues', controller.budgetrevenues)

router.get('/salary', controller.salary)

router.get('/salary-view', controller.salaryview)

router.get('/payroll-items', controller.payrollitems)

router.get('/policies', controller.policies)

router.get('/expense-reports', controller.expensereports)

router.get('/invoice-reports', controller.invoicereports)

router.get('/payments-reports', controller.paymentsreports)

router.get('/project-reports', controller.projectreports)

router.get('/task-reports', controller.taskreports)

router.get('/user-reports', controller.userreports)

router.get('/employee-reports', controller.employeereports)

router.get('/payslip-reports', controller.payslipreports)

router.get('/attendance-reports', controller.attendancereports)

router.get('/leave-reports', controller.leavereports)

router.get('/daily-reports', controller.dailyreports)

// ------------------(Performance)------------------------------------

router.get('/performance-indicator', controller.performanceindicator)

router.get('/performance', controller.performance)

router.get('/performance-appraisal', controller.performanceappraisal)

router.get('/goal-tracking', controller.goaltracking)

router.get('/goal-type', controller.goaltype)

router.get('/training', controller.training)

router.get('/trainers', controller.trainers)

router.get('/training-type', controller.trainingtype)

router.get('/promotion', controller.promotion)

router.get('/resignation', controller.resignation)

router.get('/termination', controller.termination)

// ------------------ (Administration) ---------------------

router.get('/asset', controller.assets)

router.get('/assets-reports', controller.assetsreports)

router.get('/assets-new', controller.assetsnew)

router.get('/assets-details', controller.assetsdetails)

router.get('/assets-category', controller.assetscategory)

router.get('/user-dashboard', controller.userdashboard)

router.get('/user-all-jobs', controller.useralljobs)

router.get('/saved-jobs', controller.savedjobs)

router.get('/applied-jobs', controller.appliedjobs)

router.get('/interviewing', controller.interviewing)

router.get('/job-aptitude', controller.jobaptitude)

router.get('/questions', controller.questions)

router.get('/offered-jobs', controller.offeredjobs)

router.get('/visited-jobs', controller.visitedjobs)

router.get('/archived-jobs', controller.archivedjobs)

router.get('/jobs-dashboard', controller.jobsdashboard)

router.get('/job-details', controller.jobdetails)

router.get('/jobs', controller.jobs)

router.get('/job-list', controller.joblist)

router.get('/job-view', controller.jobview)

router.get('/job-applicants', controller.jobapplicants)

router.get('/manage-resumes', controller.manageresumes)

router.get('/shortlist-candidates', controller.shortlistcandidates)

router.get('/interview-questions', controller.interviewquestions)

router.get('/offer_approvals', controller.offerapprovals)

router.get('/experiance-level', controller.experiancelevel)

router.get('/candidates', controller.candidates)

router.get('/schedule-timing', controller.scheduletiming)

router.get('/aptitude-result', controller.aptituderesult)

router.get('/knowledgebase', controller.knowledgebase)

router.get('/knowledgebase-view', controller.knowledgebaseview)

router.get('/activities', controller.activities)

router.get('/users', controller.users)

///--------------( setting & options)----------- 

router.get('/settings', controller.settings)

router.get('/localization', controller.localization)

router.get('/theme-settings', controller.themesettings)

router.get('/roles-permissions', controller.rolespermissions)

router.get('/email-settings', controller.emailsettings)

router.get('/performance-setting', controller.performancesetting)

router.get('/approval-setting', controller.approvalsetting)

router.get('/invoice-settings', controller.invoicesettings)

router.get('/salary-settings', controller.salarysettings)

router.get('/notifications-settings', controller.notificationssettings)

router.get('/change-password', controller.changepassword)

router.get('/leave-type', controller.leavetype)

router.get('/toxbox-setting', controller.toxboxsetting)

router.get('/cron-setting', controller.cronsetting)

// ---------------- (pages) ------------------------

router.get('/profile', controller.profile)

router.get('/user-asset-details', controller.userassetdetails)

router.get('/client-profile', controller.clientprofile)

// ---------------- (authentication) --------------------

router.get('/login', controller.login)

router.get('/register', controller.register)

router.get('/forgot-password', controller.forgotpassword)

router.get('/otp', controller.otp)

router.get('/lock-screen', controller.lockscreen)

//--------------- (error page) -----------------

router.get('/error-404', controller.error404)

router.get('/error-500', controller.error500)

// ------------ (subscriptions) ----------------------

router.get('/subscriptions', controller.subscriptions)

router.get('/subscriptions-company', controller.subscriptionscompany)

router.get('/subscribed-companies', controller.subscribedcompanies)

// ----------- (pages) -----------------

router.get('/search', controller.search)

router.get('/faq', controller.faq)

router.get('/terms', controller.terms)

router.get('/privacy-policy', controller.privacypolicy)

router.get('/blank-page', controller.blankpage)

// --------- (UI Interface) ----------------

router.get('/components', controller.components)

router.get('/form-basic-inputs', controller.formbasicinputs)

router.get('/form-input-groups', controller.forminputgroups)

router.get('/form-horizontal', controller.formhorizontal)

router.get('/form-vertical', controller.formvertical)

router.get('/form-mask', controller.formmask)

router.get('/form-validation', controller.formvalidation)

router.get('/tables-basic', controller.tablesbasic)

router.get('/data-tables', controller.datatables)

// redirect
router.get("/", function (req, res) {
    res.redirect("/login");
});
// redirect **

// wild card route
router.all("*", function (req, res) {
    res.redirect("/error-404");
});
// wild card route **


module.exports = router