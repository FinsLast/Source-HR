// ----------- (main dashboard) ---------------

exports.dashboard = (req, res) => {
    res.render('admin-dashboard',
        {
            title: 'Dashboard - HRMS admin template',
            active_path: 'admin-dashboard'
        })
}

exports.employee_dashboard = (req, res) => {
    res.render('employee-dashboard',
        {
            title: 'Employee Dashboard - HRMS admin template',
            active_path: 'employee-dashboard'
        })
}

exports.mail_view = (req, res) => {
    res.render('mail-view',
        {
            title: 'Mail View - HRMS admin template',
            active_path: 'mail-view',
        })
}

exports.attance_reports = (req, res) => {
    res.render('attance-reports',
        {
            active_path: 'attendance-reports',
            title: 'Attance Reports - HRMS admin template'
        })
}

exports.create_invoice = (req, res) => {
    res.render('create-invoice',
        {
            active_path: 'invoices',
            title: 'Create Invoice - HRMS admin template'
        })
}

exports.clients_list = (req, res) => {
    res.render('clients-list',
        {
            active_path: 'clients',
            title: 'Clients List - HRMS admin template'
        })
}

exports.project_list = (req, res) => {
    res.render('project-list',
        {
            active_path: 'projects',
            title: 'Project List - HRMS admin template'
        })
}

// ---------------- (apps) -----------------------

exports.chat = (req, res) => {
    res.render('chat',
        {
            active_path: 'chat',
            title: 'Chat - HRMS admin template'
        })
}

exports.video_call = (req, res) => {
    res.render('video-call',
        {
            active_path: 'video-call',
            title: 'Video Call - HRMS admin template'
        })
}

exports.voice_call = (req, res) => {
    res.render('voice-call',
        {
            active_path: 'voice-call',
            title: 'Voice Call - HRMS admin template'
        })
}

exports.outgoing_call = (req, res) => {
    res.render('outgoing-call',
        {
            active_path: 'outgoing-call',
            title: 'Outgoing Call - HRMS admin template'
        })
}

exports.incoming_call = (req, res) => {
    res.render('incoming-call',
        {
            active_path: 'incoming-call',
            title: 'Incoming Call - HRMS admin template'
        })
}

exports.employees = (req, res) => {
    res.render('employees',
        {
            active_path: 'employees',
            title: 'Employees - HRMS admin template'
        })
}

exports.events = (req, res) => {
    res.render('events',
        {
            active_path: 'events',
            title: 'Events - HRMS admin template'
        })
}

exports.contacts = (req, res) => {
    res.render('contacts',
        {
            active_path: 'contacts',
            title: 'Contacts - HRMS admin template'
        })
}

exports.inbox = (req, res) => {
    res.render('inbox',
        {
            active_path: 'inbox',
            title: 'Inbox - HRMS admin template'
        })
}

exports.compose = (req, res) => {
    res.render('compose',
        {
            active_path: 'compose',
            title: 'Compose - HRMS admin template'
        })
}

exports.file_manager = (req, res) => {
    res.render('file-manager',
        {
            active_path: 'file-manager',
            title: 'File Manager - HRMS admin template'
        })
}

// ------------- (Employee) -------------------

exports.employees_list = (req, res) => {
    res.render('employees-list',
        {
            active_path: 'employees',
            title: 'Employees List - HRMS admin template'
        })
}

exports.holidays = (req, res) => {
    res.render('holidays',
        {
            active_path: 'holidays',
            title: 'Holiday - HRMS admin template'
        })
}

exports.leaves = (req, res) => {
    res.render('leaves',
        {
            active_path: 'leaves',
            title: 'Leaves - HRMS admin template'
        })
}

exports.leaves_employee = (req, res) => {
    res.render('leaves-employee',
        {
            active_path: 'leaves-employee',
            title: 'Leaves Employee - HRMS admin template'
        })
}

exports.leave_settings = (req, res) => {
    res.render('leave-settings',
        {
            active_path: 'leave-settings',
            title: 'Leave Setting - HRMS admin template'
        })
}

exports.attendance = (req, res) => {
    res.render('attendance',
        {
            active_path: 'attendance',
            title: 'Attendance - HRMS admin template'
        })
}

exports.attendance_employee = (req, res) => {
    res.render('attendance-employee',
        {
            active_path: 'attendance-employee',
            title: 'Attendance Employee - HRMS admin template'
        })
}

exports.attend_reports = (req, res) => {
    res.render('attend-reports',
        {
            active_path: 'attend-reports',
            title: 'Attenda Reports - HRMS admin template'
        })
}

exports.departments = (req, res) => {
    res.render('departments',
        {
            active_path: 'departments',
            title: 'Departments - HRMS admin template'
        })
}

exports.designations = (req, res) => {
    res.render('designations',
        {
            active_path: 'designations',
            title: 'Designations - HRMS admin template'
        })
}

exports.time_sheet = (req, res) => {
    res.render('timesheet',
        {
            active_path: 'timesheet',
            title: 'Timesheet - HRMS admin template'
        })
}

exports.shift_scheduling = (req, res) => {
    res.render('shift-scheduling',
        {
            active_path: 'shift-scheduling',
            title: 'Shift Scheduling - HRMS admin template'
        })
}

exports.shift_list = (req, res) => {
    res.render('shift-list',
        {
            active_path: 'shift-scheduling',
            title: 'Shift List - HRMS admin template'
        })
}

exports.overtime = (req, res) => {
    res.render('overtime',
        {
            active_path: 'overtime',
            title: 'OverTime - HRMS admin template'
        })
}

exports.clients = (req, res) => {
    res.render('clients',
        {
            active_path: 'clients',
            title: 'Clients - HRMS admin template'
        })
}

exports.projects = (req, res) => {
    res.render('projects',
        {
            active_path: 'projects',
            title: 'Projects - HRMS admin template'
        })
}

exports.tasks = (req, res) => {
    res.render('tasks',
        {
            active_path: 'tasks',
            title: 'Task - HRMS admin template'
        })
}

exports.task_board = (req, res) => {
    res.render('task-board',
        {
            active_path: 'task-board',
            title: 'TaskBoard - HRMS admin template'
        })
}

exports.project_view = (req, res) => {
    res.render('project-view',
        {
            active_path: 'projects',
            title: 'Project View - HRMS admin template'
        })
}

exports.leads = (req, res) => {
    res.render('leads',
        {
            active_path: 'leads',
            title: 'Leads - HRMS admin template'
        })
}

exports.tickets = (req, res) => {
    res.render('tickets',
        {
            active_path: 'tickets',
            title: 'Tickets - HRMS admin template'
        })
}

exports.tickets_view = (req, res) => {
    res.render('tickets-view',
        {
            active_path: 'tickets-view',
            title: 'Tickets View - HRMS admin template'
        })
}

//  -------------- (HR) -----------------

exports.estimates = (req, res) => {
    res.render('estimates',
        {
            active_path: 'estimates',
            title: 'Estimates - HRMS admin template'
        })
}

exports.estimate_view = (req, res) => {
    res.render('estimate-view',
        {
            active_path: 'estimate-view',
            title: 'estimate View - HRMS admin template'
        })
}

exports.create_estimate = (req, res) => {
    res.render('create-estimate',
        {
            active_path: 'estimates',
            title: 'Create Estimate - HRMS admin template'
        })
}

exports.edit_estimate = (req, res) => {
    res.render('edit-estimate',
        {
            active_path: 'edit-estimate',
            title: 'Edit Estimate - HRMS admin template'
        })
}

exports.invoices = (req, res) => {
    res.render('invoices',
        {
            active_path: 'invoices',
            title: 'Invoices - HRMS admin template'
        })
}

exports.edit_invoice = (req, res) => {
    res.render('edit-invoice',
        {
            active_path: 'invoices',
            title: 'Edit Invoice - HRMS admin template'
        })
}

exports.invoice_view = (req, res) => {
    res.render('invoice-view',
        {
            active_path: 'invoices',
            title: 'Invoice View - HRMS admin template'
        })
}

exports.payments = (req, res) => {
    res.render('payments',
        {
            active_path: 'payments',
            title: 'Payments - HRMS admin template'
        })
}

exports.expenses = (req, res) => {
    res.render('expenses',
        {
            active_path: 'expenses',
            title: 'Expenses - HRMS admin template'
        })
}

exports.providentfund = (req, res) => {
    res.render('provident-fund',
        {
            active_path: 'provident-fund',
            title: 'Provident Fund - HRMS admin template'
        })
}

exports.taxes = (req, res) => {
    res.render('taxes',
        {
            active_path: 'taxes',
            title: 'Taxes - HRMS admin template'
        })
}

exports.categories = (req, res) => {
    res.render('categories',
        {
            active_path: 'categories',
            title: 'Categories - HRMS admin template'
        })
}

exports.subcategory = (req, res) => {
    res.render('sub-category',
        {
            active_path: 'categories',
            title: 'Sub Category - HRMS admin template'
        })
}

exports.budgets = (req, res) => {
    res.render('budgets',
        {
            active_path: 'budgets',
            title: 'Budgets - HRMS admin template'
        })
}

exports.budgetexpenses = (req, res) => {
    res.render('budget-expenses',
        {
            active_path: 'budget-expenses',
            title: 'Budget Expenses - HRMS admin template'
        })
}

exports.budgetrevenues = (req, res) => {
    res.render('budget-revenues',
        {
            active_path: 'budget-revenues',
            title: 'Budget Revenues - HRMS admin template'
        })
}

exports.salary = (req, res) => {
    res.render('salary',
        {
            active_path: 'salary',
            title: 'Salary - HRMS admin template'
        })
}

exports.salaryview = (req, res) => {
    res.render('salary-view',
        {
            active_path: 'salary-view',
            title: 'Salary View - HRMS admin template'
        })
}

exports.payrollitems = (req, res) => {
    res.render('payroll-items',
        {
            active_path: 'payroll-items',
            title: 'Payroll Items - HRMS admin template'
        })
}

exports.policies = (req, res) => {
    res.render('policies',
        {
            title: 'Policies - HRMS admin template',
            active_path: 'policies'
        })
}

exports.expensereports = (req, res) => {
    res.render('expense-reports',
        {
            active_path: 'expense-reports',
            title: 'Expense Reports - HRMS admin template'
        })
}

exports.invoicereports = (req, res) => {
    res.render('invoice-reports',
        {
            active_path: 'invoice-reports',
            title: 'Invoice Reports - HRMS admin template'
        })
}

exports.paymentsreports = (req, res) => {
    res.render('payments-reports',
        {
            active_path: 'payments-reports',
            title: 'Payments Reports - HRMS admin template'
        })
}

exports.projectreports = (req, res) => {
    res.render('project-reports',
        {
            active_path: 'project-reports',
            title: 'Project Reports - HRMS admin template'
        })
}

exports.taskreports = (req, res) => {
    res.render('task-reports',
        {
            active_path: 'task-reports',
            title: 'Task Reports - HRMS admin template'
        })
}

exports.userreports = (req, res) => {
    res.render('user-reports',
        {
            active_path: 'user-reports',
            title: 'User Reports - HRMS admin template'
        })
}

exports.employeereports = (req, res) => {
    res.render('employee-reports',
        {
            active_path: 'employee-reports',
            title: 'Employee Reports - HRMS admin template'
        })
}

exports.payslipreports = (req, res) => {
    res.render('payslip-reports',
        {
            active_path: 'payslip-reports',
            title: 'Payslip Reports - HRMS admin template'
        })
}

exports.attendancereports = (req, res) => {
    res.render('attendance-reports',
        {
            active_path: 'attendance-reports',
            title: 'Attendance Reports - HRMS admin template'
        })
}

exports.leavereports = (req, res) => {
    res.render('leave-reports',
        {
            active_path: 'leave-reports',
            title: 'Leave Reports - HRMS admin template'
        })
}

exports.dailyreports = (req, res) => {
    res.render('daily-reports',
        {
            active_path: 'daily-reports',
            title: 'Daily Reports - HRMS admin template'
        })
}

// ------------------( performance )----------------

exports.performanceindicator = (req, res) => {
    res.render('performance-indicator',
        {
            active_path: 'performance-indicator',
            title: 'Performance Indicator - HRMS admin template'
        })
}

exports.performance = (req, res) => {
    res.render('performance',
        {
            active_path: 'performance',
            title: 'Performance - HRMS admin template'
        })
}

exports.performanceappraisal = (req, res) => {
    res.render('performance-appraisal',
        {
            active_path: 'performance-appraisal',
            title: 'Performance Appraisal - HRMS admin template'
        })
}

exports.goaltracking = (req, res) => {
    res.render('goal-tracking',
        {
            active_path: 'goal-tracking',
            title: 'Goal Tracking - HRMS admin template'
        })
}

exports.goaltype = (req, res) => {
    res.render('goal-type',
        {
            active_path: 'goal-type',
            title: 'Goal Type - HRMS admin template'
        })
}

exports.training = (req, res) => {
    res.render('training',
        {
            active_path: 'training',
            title: 'Training - HRMS admin template'
        })
}

exports.trainers = (req, res) => {
    res.render('trainers',
        {
            active_path: 'trainers',
            title: 'Trainers - HRMS admin template'
        })
}

exports.trainingtype = (req, res) => {
    res.render('training-type',
        {
            active_path: 'training-type',
            title: 'Training Type - HRMS admin template'
        })
}

exports.promotion = (req, res) => {
    res.render('promotion',
        {
            active_path: 'promotion',
            title: 'Promotion - HRMS admin template'
        })
}

exports.resignation = (req, res) => {
    res.render('resignation',
        {
            active_path: 'resignation',
            title: 'Resignation - HRMS admin template'
        })
}

exports.termination = (req, res) => {
    res.render('termination',
        {
            active_path: 'termination',
            title: 'Termination - HRMS admin template'
        })
}

// -------------- (Administration) ---------------

exports.assets = (req, res) => {
    res.render('assets',
        {
            active_path: 'assets',
            title: 'Assets - HRMS admin template'
        })
}

exports.assetsreports = (req, res) => {
    res.render('assets-reports',
        {
            active_path: 'assets',
            title: 'Assets Reports - HRMS admin template'
        })
}

exports.assetsnew = (req, res) => {
    res.render('assets-new',
        {
            active_path: 'assets',
            title: 'Assets New - HRMS admin template'
        })
}

exports.assetsdetails = (req, res) => {
    res.render('assets-details',
        {
            active_path: 'assets',
            title: 'Assets Details - HRMS admin template'
        })
}

exports.assetscategory = (req, res) => {
    res.render('assets-category',
        {
            active_path: 'assets',
            title: 'Assets Category - HRMS admin template'
        })
}

exports.userdashboard = (req, res) => {
    res.render('user-dashboard',
        {
            active_path: 'user-dashboard',
            title: 'User Dashboard - HRMS admin template'
        })
}

exports.useralljobs = (req, res) => {
    res.render('user-all-jobs',
        {
            active_path: 'user-dashboard',
            title: 'User All Jobs - HRMS admin template'
        })
}

exports.savedjobs = (req, res) => {
    res.render('saved-jobs',
        {
            active_path: 'user-dashboard',
            title: 'Saved Jobs - HRMS admin template'
        })
}

exports.appliedjobs = (req, res) => {
    res.render('applied-jobs',
        {
            active_path: 'user-dashboard',
            title: 'Applied Jobs - HRMS admin template'
        })
}

exports.interviewing = (req, res) => {
    res.render('interviewing',
        {
            active_path: 'user-dashboard',
            title: 'Interviewing - HRMS admin template'
        })
}

exports.jobaptitude = (req, res) => {
    res.render('job-aptitude',
        {
            active_path: 'job-aptitude',
            title: 'Job Aptitude - HRMS admin template'
        })
}

exports.questions = (req, res) => {
    res.render('questions',
        {
            active_path: 'questions',
            title: 'Questions - HRMS admin template'
        })
}

exports.offeredjobs = (req, res) => {
    res.render('offered-jobs',
        {
            active_path: 'user-dashboard',
            title: 'Offered Jobs - HRMS admin template'
        })
}

exports.visitedjobs = (req, res) => {
    res.render('visited-jobs',
        {
            active_path: 'user-dashboard',
            title: 'Visited Jobs - HRMS admin template'
        })
}

exports.archivedjobs = (req, res) => {
    res.render('archived-jobs',
        {
            active_path: 'user-dashboard',
            title: 'Archived Jobs - HRMS admin template'
        })
}

exports.jobsdashboard = (req, res) => {
    res.render('jobs-dashboard',
        {
            active_path: 'jobs-dashboard',
            title: 'Job Dashboard - HRMS admin template'
        })
}

exports.jobdetails = (req, res) => {
    res.render('job-details',
        {
            active_path: 'job-details',
            title: 'Job Details - HRMS admin template'
        })
}

exports.jobs = (req, res) => {
    res.render('jobs',
        {
            active_path: 'jobs',
            title: 'Jobs - HRMS admin template'
        })
}

exports.joblist = (req, res) => {
    res.render('job-list',
        {
            active_path: 'job-list',
            title: 'Job List - HRMS admin template'
        })
}

exports.jobview = (req, res) => {
    res.render('job-view',
        {
            active_path: 'job-view',
            title: 'Job View - HRMS admin template'
        })
}

exports.jobapplicants = (req, res) => {
    res.render('job-applicants',
        {
            active_path: 'job-applicants',
            title: 'Job Applicants - HRMS admin template'
        })
}

exports.manageresumes = (req, res) => {
    res.render('manage-resumes',
        {
            active_path: 'manage-resumes',
            title: 'Manager Resumes - HRMS admin template'
        })
}

exports.shortlistcandidates = (req, res) => {
    res.render('shortlist-candidates',
        {
            active_path: 'shortlist-candidates',
            title: 'ShortList Candidates - HRMS admin template'
        })
}

exports.interviewquestions = (req, res) => {
    res.render('interview-questions',
        {
            active_path: 'interview-questions',
            title: 'Interview Questions - HRMS admin template'
        })
}

exports.offerapprovals = (req, res) => {
    res.render('offer_approvals',
        {
            active_path: 'offer_approvals',
            title: 'Offer Approvals - HRMS admin template'
        })
}

exports.experiancelevel = (req, res) => {
    res.render('experiance-level',
        {
            active_path: 'experiance-level',
            title: 'Experiance Level - HRMS admin template'
        })
}

exports.candidates = (req, res) => {
    res.render('candidates',
        {
            active_path: 'candidates',
            title: 'Candidates - HRMS admin template'
        })
}

exports.scheduletiming = (req, res) => {
    res.render('schedule-timing',
        {
            active_path: 'schedule-timing',
            title: 'Schedule Timing - HRMS admin template'
        })
}

exports.aptituderesult = (req, res) => {
    res.render('aptitude-result',
        {
            active_path: 'aptitude-result',
            title: 'Aptitude Result - HRMS admin template'
        })
}

exports.knowledgebase = (req, res) => {
    res.render('knowledgebase',
        {
            active_path: 'knowledgebase',
            title: 'Knowledgebase - HRMS admin template'
        })
}

exports.knowledgebaseview = (req, res) => {
    res.render('knowledgebase-view',
        {
            active_path: 'knowledgebase',
            title: 'Knowledgebase View - HRMS admin template'
        })
}

exports.activities = (req, res) => {
    res.render('activities',
        {
            active_path: 'activities',
            title: 'Activities - HRMS admin template'
        })
}

exports.users = (req, res) => {
    res.render('users',
        {
            active_path: 'users',
            title: 'Users - HRMS admin template'
        })
}

exports.settings = (req, res) => {
    res.render('settings',
        {
            active_path: 'settings',
            title: 'Settings - HRMS admin template'
        })
}

exports.localization = (req, res) => {
    res.render('localization',
        {
            active_path: 'localization',
            title: 'Localization - HRMS admin template'
        })
}

exports.themesettings = (req, res) => {
    res.render('theme-settings',
        {
            active_path: 'theme-settings',
            title: 'Theme Settings - HRMS admin template'
        })
}

exports.rolespermissions = (req, res) => {
    res.render('roles-permissions',
        {
            active_path: 'roles-permissions',
            title: 'Role Permissions - HRMS admin template'
        })
}

exports.emailsettings = (req, res) => {
    res.render('email-settings',
        {
            active_path: 'email-settings',
            title: 'Email Setting - HRMS admin template'
        })
}

exports.performancesetting = (req, res) => {
    res.render('performance-setting',
        {
            active_path: 'performance-setting',
            title: 'Performance Setting - HRMS admin template'
        })
}

exports.approvalsetting = (req, res) => {
    res.render('approval-setting',
        {
            active_path: 'approval-setting',
            title: 'Approval Setting - HRMS admin template'
        })
}

exports.invoicesettings = (req, res) => {
    res.render('invoice-settings',
        {
            active_path: 'invoice-settings',
            title: 'Invoice Setting - HRMS admin template'
        })
}

exports.salarysettings = (req, res) => {
    res.render('salary-settings',
        {
            active_path: 'salary-settings',
            title: 'Salary Setting - HRMS admin template'
        })
}

exports.notificationssettings = (req, res) => {
    res.render('notifications-settings',
        {
            active_path: 'notifications-settings',
            title: 'Notification Setting - HRMS admin template'
        })
}

exports.changepassword = (req, res) => {
    res.render('auth/change-password',
        {
            active_path: 'auth',
            title: 'Change Password - HRMS admin template'
        })
}

exports.leavetype = (req, res) => {
    res.render('leave-type',
        {
            active_path: 'leave-type',
            title: 'Leave Type - HRMS admin template'
        })
}

exports.toxboxsetting = (req, res) => {
    res.render('toxbox-setting',
        {
            active_path: 'toxbox-setting',
            title: 'Toxbox Setting - HRMS admin template'
        })
}

exports.cronsetting = (req, res) => {
    res.render('cron-setting',
        {
            active_path: 'cron-setting',
            title: 'Cron Setting - HRMS admin template'
        })
}

// ------------ (pages) -------------------

exports.profile = (req, res) => {
    res.render('profile',
        {
            active_path: 'profile',
            title: 'Profile - HRMS admin template'
        })
}

exports.userassetdetails = (req, res) => {
    res.render('user-asset-details',
        {
            active_path: 'profile',
            title: 'User Asset Details - HRMS admin template'
        })
}

exports.clientprofile = (req, res) => {
    res.render('client-profile',
        {
            active_path: 'client-profile',
            title: 'Clients Profile - HRMS admin template'
        })
}

// ------------ (authentication) ---------------

exports.login = (req, res) => {
    res.render('auth/login',
        {
            active_path: 'auth',
            title: 'LOGIN - HRMS admin template'
        })
}

exports.register = (req, res) => {
    res.render('auth/register',
        {
            active_path: 'auth',
            title: 'Register - HRMS admin template'
        })
}

exports.forgotpassword = (req, res) => {
    res.render('auth/forgot-password',
        {
            active_path: 'auth',
            title: 'Forget Password - HRMS admin template'
        })
}

exports.otp = (req, res) => {
    res.render('auth/otp',
        {
            active_path: 'auth',
            title: 'OTP - HRMS admin template'
        })
}

exports.lockscreen = (req, res) => {
    res.render('auth/lock-screen',
        {
            active_path: 'auth',
            title: 'Lock Screen - HRMS admin template'
        })
}

//  -------------- (error page) ---------------

exports.error404 = (req, res) => {
    res.render('errorpage/error-404',
        {
            active_path: 'error',
            title: 'Error 404 - HRMS admin template'
        })
}

exports.error500 = (req, res) => {
    res.render('errorpage/error-500',
        {
            active_path: 'error',
            title: 'Error 500 - HRMS admin template'
        })
}

// ------------- (subscriptions) ---------------

exports.subscriptions = (req, res) => {
    res.render('subscriptions',
        {
            active_path: 'subscriptions',
            title: 'Subscriptions - HRMS admin template'
        })
}

exports.subscriptionscompany = (req, res) => {
    res.render('subscriptions-company',
        {
            active_path: 'subscriptions-company',
            title: 'Subscription Company - HRMS admin template'
        })
}

exports.subscribedcompanies = (req, res) => {
    res.render('subscribed-companies',
        {
            active_path: 'subscribed-companies',
            title: 'Subscribed Companies - HRMS admin template'
        })
}

// ------------- (pages) -------------------

exports.search = (req, res) => {
    res.render('search',
        {
            active_path: 'search',
            title: 'Search - HRMS admin template'
        })
}

exports.faq = (req, res) => {
    res.render('faq',
        {
            active_path: 'faq',
            title: 'FAQ - HRMS admin template'
        })
}

exports.terms = (req, res) => {
    res.render('terms',
        {
            active_path: 'terms',
            title: 'Terms - HRMS admin template'
        })
}

exports.privacypolicy = (req, res) => {
    res.render('privacy-policy',
        {
            active_path: 'privacy-policy',
            title: 'Privacy Policy - HRMS admin template'
        })
}

exports.blankpage = (req, res) => {
    res.render('blank-page',
        {
            active_path: 'blank-page',
            title: 'Blank Page - HRMS admin template'
        })
}

// ----------- (UI Interface) -------------

exports.components = (req, res) => {
    res.render('components',
        {
            active_path: 'components',
            title: 'Components - HRMS admin template'
        })
}

exports.formbasicinputs = (req, res) => {
    res.render('form-basic-inputs',
        {
            active_path: 'form-basic-inputs',
            title: 'Form Basic Inputs - HRMS admin template'
        })
}

exports.forminputgroups = (req, res) => {
    res.render('form-input-groups',
        {
            active_path: 'form-input-groups',
            title: 'Form Input Groups - HRMS admin template'
        })
}

exports.formhorizontal = (req, res) => {
    res.render('form-horizontal',
        {
            active_path: 'form-horizontal',
            title: 'Form Horizontal - HRMS admin template'
        })
}

exports.formvertical = (req, res) => {
    res.render('form-vertical',
        {
            active_path: 'form-vertical',
            title: 'Form Vertical - HRMS admin template'
        })
}

exports.formmask = (req, res) => {
    res.render('form-mask',
        {
            active_path: 'form-mask',
            title: 'Form Mask - HRMS admin template'
        })
}

exports.formvalidation = (req, res) => {
    res.render('form-validation',
        {
            active_path: 'form-validation',
            title: 'Form Validation - HRMS admin template'
        })
}

exports.tablesbasic = (req, res) => {
    res.render('tables-basic',
        {
            active_path: 'tables-basic',
            title: 'Basic Tables - HRMS admin template'
        })
}

exports.datatables = (req, res) => {
    res.render('data-tables',
        {
            active_path: 'data-tables',
            title: 'Data Tables - HRMS admin template'
        })
}